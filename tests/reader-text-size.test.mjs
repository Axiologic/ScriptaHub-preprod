import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import vm from 'node:vm';
const source=await fs.readFile(new URL('../docs/reader/reader.js',import.meta.url),'utf8');
const extract=name=>source.match(new RegExp('function '+name+'\\([^]*?\\n\\}'))?.[0];
const constants=source.match(/const textSize = [^;]+;/)[0];
test('HTML font size can decrease to 50%, persist below 100%, increase to 150% and reset',()=>{
 const sandbox={state:{type:'html',preferences:{fontSize:1.16},pdf:{}},app:{style:{setProperty:(name,value)=>sandbox.css=value}},sizeButton:{},postHtmlFrameSettings(){},savePreferences(){sandbox.saved=sandbox.state.preferences.fontSize;},renderPdfPage(){}};
 vm.createContext(sandbox);vm.runInContext([constants,...['clampTextSize','applyTextSize','changeTextSize','resetDisplay'].map(extract)].join('\n'),sandbox);
 vm.runInContext('changeTextSize(-1)',sandbox);assert.equal(sandbox.sizeButton.textContent,'95%');assert.equal(sandbox.saved,1.102);
 assert.equal(vm.runInContext('clampTextSize(.812)',sandbox),.812,'saved 70% stays below 100%');
 for(let i=0;i<30;i++)vm.runInContext('changeTextSize(-1)',sandbox);assert.equal(sandbox.sizeButton.textContent,'50%');assert.equal(sandbox.css,'.58rem'.replace(/^\./,'0.'));
 for(let i=0;i<40;i++)vm.runInContext('changeTextSize(1)',sandbox);assert.equal(sandbox.sizeButton.textContent,'150%');
 vm.runInContext('resetDisplay()',sandbox);assert.equal(sandbox.sizeButton.textContent,'100%');assert.equal(sandbox.saved,1.16);
 for(const value of ['NaN','Infinity','-1','0','undefined'])assert.equal(vm.runInContext('clampTextSize('+value+')',sandbox),1.16);
 assert.match(source,/fontSize: clampTextSize\(readStored\(preferenceKey, \{\}\)\.fontSize\)/);
});
