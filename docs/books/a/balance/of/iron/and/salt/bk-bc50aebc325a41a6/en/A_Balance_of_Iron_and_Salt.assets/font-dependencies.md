# Book-owned font assets

These unmodified variable TrueType fonts restore the font families identified
in the English PDF. EB Garamond supplies regular, bold and italic faces; Noto
Sans supplies the source's 8.5pt machine notices. No external font service is
used by the reader. Full fonts replace PDF subsets to retain Unicode mappings
and all glyphs in the approved ScriptaHub editorial text.

Downloaded 2026-09-11 from https://github.com/google/fonts/tree/main/ofl/ebgaramond
and https://github.com/google/fonts/tree/main/ofl/notosans. Exact asset identities:

| Local file | Upstream file | SHA-256 |
| --- | --- | --- |
| EBGaramond-Regular.ttf | EBGaramond[wght].ttf | ef9512f92f6d579e5dc75af59a5a4b1b8b47d2eda89e00b954d44520e5369027 |
| EBGaramond-Italic.ttf | EBGaramond-Italic[wght].ttf | bba2c4499c93c9612b90b9825d32b07da52fce2fe57562a1eb6b833553f93c4e |
| NotoSans-Regular.ttf | NotoSans[wdth,wght].ttf | bfb7bb691513f12e734dc346c03a03f784912432d7e3fa8e56efcf906fe86b3d |

SIL Open Font License 1.1 applies. Retain OFL.txt for EB Garamond and
NotoSans-OFL.txt for Noto Sans with these files. Do not sell the fonts alone.
The files have no runtime dependency beyond browser TrueType/variable font
support. A missing font produces fallback rendering and fails typography QA.
Update only with source comparison, retained notices and actual browser glyph
verification. There is no automatic download or update at page load.

The full font files are about 3.5 MiB combined. Generic system fonts were
rejected because they materially changed this PDF's typography. The embedded
Georgia descriptor has no text occurrences and is not distributed. These fonts
are scoped to this English book and can be removed if the stylesheet is removed
or replaced after another source-derived typography review.
