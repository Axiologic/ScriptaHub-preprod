import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import vm from 'node:vm';

const source = await fs.readFile(new URL('../docs/reader/reader.js', import.meta.url), 'utf8');
const readerCss = await fs.readFile(new URL('../docs/reader/reader.css', import.meta.url), 'utf8');
const standaloneCss = await fs.readFile(new URL('../docs/reader/standalone.css', import.meta.url), 'utf8');
const clean = source.match(/function cleanReadableDocument\([^]*?\n\}/)[0];
const readerUrl = 'https://library.test/prefix/docs/reader/index.html';

function element(attributes = {}) {
  const values = new Map(Object.entries(attributes));
  const classes = new Set((attributes.class || '').split(' ').filter(Boolean));
  classes.contains = name => classes.has(name);
  const add = classes.add.bind(classes);
  classes.add = (...names) => names.forEach(add);
  return {
    classList: classes, children: [], childNodes: [], listeners: {},
    get attributes() { return [...values].map(([name, value]) => ({ name, value })); },
    hasAttribute: name => values.has(name),
    getAttribute: name => values.get(name) ?? null,
    setAttribute: (name, value) => values.set(name, value),
    removeAttribute: name => values.delete(name),
    cloneNode() { return element(Object.fromEntries(values)); },
    querySelector: () => null,
    querySelectorAll: () => [],
    append(...nodes) { this.children.push(...nodes); },
    addEventListener(name, listener) { this.listeners[name] = listener; }
  };
}

function render(path, attributes, links) {
  const original = element(attributes);
  const sourceDocument = { body: original, querySelector: () => null, querySelectorAll: () => links.map(element) };
  const context = vm.createContext({ URL, window: { location: { href: readerUrl } }, document: { createElement: () => element() } });
  vm.runInContext(clean, context);
  return context.cleanReadableDocument(sourceDocument, new URL(path, readerUrl).href);
}

test('Artificial Impossibility keeps both managed presentation markers', async () => {
  const book = new URL('../docs/books/artificial/impossibility/bk-ff85e7259f32439c/en/full_content.html', import.meta.url);
  const html = await fs.readFile(book, 'utf8');
  assert.match(html, /data-validatebook-root/);
  assert.match(html, /data-pdf-fidelity/);
  const content = render('../books/artificial/impossibility/bk-ff85e7259f32439c/en/full_content.html',
    { 'data-validatebook-root': '', 'data-vb-style': 's1' },
    [{ rel: 'stylesheet', href: 'validatebook-layout.css', 'data-validatebook-presentation': '' }]);
  assert.equal(content.getAttribute('data-validatebook-root'), '');
  assert.equal(content.getAttribute('data-vb-style'), 's1');
  assert.equal(content.children[0].href, new URL('validatebook-layout.css', 'https://library.test/prefix/docs/books/artificial/impossibility/bk-ff85e7259f32439c/en/').href);
});

test('new books, translations and archived editions load their declared CSS in order', () => {
  for (const edition of ['en', 'ro', 'edition-files/edition-2/fr']) {
    const content = render(`../books/new/title/bk-future/${edition}/full_content.html`,
      { 'data-pdf-fidelity': 'future-book', class: 'pdf-reflow', 'data-validatebook-root': '' },
      [{ rel: 'stylesheet', href: '../en/assets/source-fidelity.css' }, { rel: 'stylesheet', href: 'validatebook-layout.css' }]);
    assert.equal(content.getAttribute('data-pdf-fidelity'), 'future-book');
    assert.ok(content.classList.has('pdf-reflow'));
    assert.equal(content.children.length, 2);
    assert.ok(content.children[0].href.endsWith('/en/assets/source-fidelity.css'));
    assert.ok(content.children[1].href.endsWith(`/${edition}/validatebook-layout.css`));
    assert.equal(typeof content.listeners.click, 'function');
  }
});

test('book imports exclude external CSS and the standalone shell', () => {
  const content = render('../books/new/en/full_content.html', {}, [
    { rel: 'stylesheet', href: '../../../reader/standalone.css' },
    { rel: 'stylesheet', href: 'https://external.test/book.css' },
    { rel: 'stylesheet', href: '/prefix/docs/books-other/layout.css' },
    { rel: 'stylesheet', href: 'layout.css', onload: 'unexpected()' }
  ]);
  assert.equal(content.children.length, 1);
  assert.equal(content.children[0].getAttribute('onload'), null);
  assert.ok(content.children[0].href.endsWith('/books/new/en/layout.css'));
  assert.equal(render('https://external.test/books/en/full_content.html', {}, [{ href: 'layout.css' }]).children.length, 0);
});

test('reader typography defaults exclude source-styled and validator-managed books', () => {
  const managedGate = ':not([data-pdf-fidelity]):not([data-validatebook-root])';
  const contentRules = [...readerCss.matchAll(/([^{}]+)\{([^{}]*)\}/g)]
    .map(match => [match[0], match[1].trim(), match[2]])
    .filter(([, selector]) => selector.includes('.reader-html-content '));
  for (const [, selector, declarations] of contentRules) {
    if (/display:\s*none\s*!important/.test(declarations) && /:is\(script, style, noscript, \[hidden\]\)/.test(selector)) continue;
    if (selector.includes('[data-theme="night"]') && selector.includes('.reader-html-content[data-validatebook-root]')) {
      assert.doesNotMatch(declarations, /(?:margin|padding|font(?:-family|-size)?|line-height|text-indent|text-align|hyphens)\s*:/);
      continue;
    }
    assert.ok(selector.includes(managedGate), `ungated imported-content selector: ${selector.trim()}`);
  }

  const standaloneRules = [...standaloneCss.matchAll(/([^{}]+)\{([^{}]*)\}/g)]
    .filter(([, selector, declarations]) => /(?:margin|padding|color|font(?:-family|-size)?|line-height|text-indent|text-align|hyphens)\s*:/.test(declarations)
      && /(?:h[1-4]|\bp\b|\.pdf-|\ba\b|\bimg\b|blockquote)/.test(selector));
  for (const [, selector] of standaloneRules) {
    assert.ok(selector.includes(managedGate), `ungated standalone-content selector: ${selector.trim()}`);
  }

  assert.doesNotMatch(readerCss, /\.reader-html-content\[data-pdf-fidelity=/);
  assert.match(readerCss, /--standalone-size:\s*var\(--reader-font-size\)/);
  assert.match(readerCss, /\.reader-html-content\s*\{[^}]*width:\s*min\(calc\(100% - 48px\), 920px\)/s);
  assert.doesNotMatch(readerCss.match(/\.reader-html-content\s*\{([^}]*)\}/s)[1], /\bpadding\s*:/);
  assert.doesNotMatch(standaloneCss.match(/body\s*\{([^}]*)\}/s)[1], /\bpadding\s*:/);
});

test('night reader recolors validator-managed prose without overriding table or callout colors', () => {
  const managedNightRules = [...readerCss.matchAll(/([^{}]+)\{([^{}]*)\}/g)]
    .filter(([, selector]) => selector.includes('[data-theme="night"]') && selector.includes('.reader-html-content[data-validatebook-root]'));
  assert.equal(managedNightRules.length, 3);
  assert.ok(managedNightRules.every(([rule, selector]) => selector.includes(':not(.pdf-table-wrap *)') && selector.includes(':not(aside *)') && /color:/.test(rule)));
  assert.ok(managedNightRules.some(([rule]) => /color:\s*var\(--reader-ink\)\s*!important/.test(rule)));
  assert.ok(managedNightRules.some(([rule]) => /color:\s*var\(--reader-accent\)\s*!important/.test(rule)));
});

test('both source-style markers disable legacy iframe scaling', () => {
  assert.match(source, /body\?\.matches\('\[data-pdf-fidelity\], \[data-validatebook-root\]'\) \? 1 : 1\.24/);
});
