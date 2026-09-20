Installed: true
Verified candidate installed.

# ValidateBook: raport de corecție

| | |
|---|---|
| **Status** | completed_with_errors |
| **Limbi** | en |
| **Pagini PDF verificate** | 77 |
| **Corecții aplicate** | 346 |
| **Erori rămase** | 462 |

## Erori clare rămase

| Limbă | Problemă | Cazuri | Exemple de locații |
|---|---|---:|---|
| en | Table cell fill, border, column proportion or typography differs from the PDF. | 292 | html:nth-child(1) > body:nth-child(2) > section:nth-child(11) > div:nth-child(4) > table:nth-child(1) > thead:nth-child(1) > tr:nth-child(1) > th:nth-child(1)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(11) > div:nth-child(4) > table:nth-child(1) > thead:nth-child(1) > tr:nth-child(1) > th:nth-child(2)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(11) > div:nth-child(4) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(1) |
| en | Justified word gaps exceed 0.65 em in sampled rendered lines. | 127 | html:nth-child(1) > body:nth-child(2) > section:nth-child(6) > p:nth-child(3)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(9) > p:nth-child(4)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(15) > p:nth-child(5) |
| en | Un paragraf englez nu are potrivire unica in PDF, deci fontul/marimea nu pot fi certificate. | 19 | #page_12<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(15) > p:nth-child(4)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(17) > p:nth-child(4) |
| en | A multipage source table was merged into one HTML page; distribute its certified rows back into their source page containers. | 12 | html:nth-child(1) > body:nth-child(2) > section:nth-child(4) > div:nth-child(3) > table:nth-child(1)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(7) > div:nth-child(5) > table:nth-child(1)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(21) > div:nth-child(6) > table:nth-child(1) |
| en | Page anchor is outside its corresponding page container. | 6 | page_5<br>page_8<br>page_22 |
| en | PDF list structure or typography differs from HTML. | 2 | page 4<br>page 5 |
| en | Imported reader list structure or typography differs from PDF. | 2 | page 4<br>page 5 |
| en | Source display groups are merged, missing or unverified. | 1 | page 2 |
| en | A repeated source passage has no unique local mapping for paragraph font-size or family correction. | 1 | #chapter-2 |

## Pagini de traducere de corectat

Nu au fost identificate pagini de traducere de corectat.

## Corecții aplicate

| Limbă / tip | Fixuri | Fișiere afectate |
|---|---:|---:|
| en / consolidate_styles | 9 | 1 |
| en / presentation | 328 | 1 |
| en / source_display_page | 4 | 1 |
| en / split_source_phrase | 5 | 1 |
