Installed: true
Verified candidate installed.

# ValidateBook: raport de corecție

| | |
|---|---|
| **Status** | completed_with_errors |
| **Limbi** | en |
| **Pagini PDF verificate** | 100 |
| **Corecții aplicate** | 0 |
| **Erori rămase** | 634 |

## Erori clare rămase

| Limbă | Problemă | Cazuri | Exemple de locații |
|---|---|---:|---|
| en | Justified word gaps exceed 0.65 em in sampled rendered lines. | 429 | html:nth-child(1) > body:nth-child(2) > section:nth-child(3) > p:nth-child(3)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(5) > p:nth-child(3)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(13) > p:nth-child(6) |
| en | Table cell fill, border, column proportion or typography differs from the PDF. | 138 | html:nth-child(1) > body:nth-child(2) > section:nth-child(7) > div:nth-child(2) > table:nth-child(1) > thead:nth-child(1) > tr:nth-child(1) > th:nth-child(1)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(7) > div:nth-child(2) > table:nth-child(1) > thead:nth-child(1) > tr:nth-child(1) > th:nth-child(2)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(7) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(1) |
| en | Un paragraf englez nu are potrivire unica in PDF, deci fontul/marimea nu pot fi certificate. | 32 | #page_3<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(3) > p:nth-child(3)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(3) > p:nth-child(5) |
| en | A multipage source table was merged into one HTML page; distribute its certified rows back into their source page containers. | 8 | html:nth-child(1) > body:nth-child(2) > section:nth-child(16) > div:nth-child(6) > table:nth-child(1)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(24) > div:nth-child(7) > table:nth-child(1)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(56) > div:nth-child(5) > table:nth-child(1) |
| en | A repeated source passage has no unique local mapping for paragraph font-size or family correction. | 5 | #page_8<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(74) > p:nth-child(8)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(75) > p:nth-child(7) |
| en | Candidate installation rejected: reader_page_geometry_override | 4 | pagination<br>typography<br>display |
| en | HTML table has no certified source grid; unsupported or ambiguous tables require a native handler. | 4 | html:nth-child(1) > body:nth-child(2) > section:nth-child(81) > div:nth-child(4) > table:nth-child(1)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(95) > div:nth-child(8) > table:nth-child(1)<br>html:nth-child(1) > body:nth-child(2) > article:nth-child(1) > section:nth-child(81) > div:nth-child(4) > table:nth-child(1) |
| en | One PDF table was split into malformed HTML rows, tables or adjacent text; exact column token streams provide a deterministic reconstruction. | 4 | html:nth-child(1) > body:nth-child(2) > section:nth-child(86) > div:nth-child(7) > table:nth-child(1)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(87) > div:nth-child(1) > table:nth-child(1)<br>html:nth-child(1) > body:nth-child(2) > article:nth-child(1) > section:nth-child(86) > div:nth-child(7) > table:nth-child(1) |
| en | Source table has no unique complete cell/text/span mapping. | 3 | PDF page 8<br>PDF page 82<br>PDF page 96 |
| en | Candidate installation rejected: duplicate_id, reader_page_geometry_override | 2 | all<br>tables |
| en | Page anchor is outside its corresponding page container. | 2 | page_57<br>page_82 |
| en | Source display groups are merged, missing or unverified. | 1 | page 2 |
| en | PDF list structure or typography differs from HTML. | 1 | page 25 |
| en | Imported reader list structure or typography differs from PDF. | 1 | page 25 |

## Pagini de traducere de corectat

Nu au fost identificate pagini de traducere de corectat.

## Corecții aplicate

Nicio corecție aplicată.
