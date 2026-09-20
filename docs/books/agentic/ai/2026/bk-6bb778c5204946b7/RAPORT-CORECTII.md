Installed: true
Verified candidate installed.

# ValidateBook: raport de corecție

| | |
|---|---|
| **Status** | completed_with_errors |
| **Limbi** | en |
| **Pagini PDF verificate** | 94 |
| **Corecții aplicate** | 731 |
| **Erori rămase** | 573 |

## Erori clare rămase

| Limbă | Problemă | Cazuri | Exemple de locații |
|---|---|---:|---|
| en | Justified word gaps exceed 0.65 em in sampled rendered lines. | 344 | html:nth-child(1) > body:nth-child(2) > section:nth-child(4) > p:nth-child(4)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(8) > p:nth-child(2)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(10) > p:nth-child(2) |
| en | Table cell fill, border, column proportion or typography differs from the PDF. | 220 | html:nth-child(1) > body:nth-child(2) > section:nth-child(18) > div:nth-child(4) > table:nth-child(1) > thead:nth-child(1) > tr:nth-child(1) > th:nth-child(1)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(18) > div:nth-child(4) > table:nth-child(1) > thead:nth-child(1) > tr:nth-child(1) > th:nth-child(2)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(18) > div:nth-child(4) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(1) |
| en | A multipage source table was merged into one HTML page; distribute its certified rows back into their source page containers. | 6 | html:nth-child(1) > body:nth-child(2) > section:nth-child(10) > div:nth-child(5) > table:nth-child(1)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(27) > div:nth-child(5) > table:nth-child(1)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(88) > div:nth-child(4) > table:nth-child(1) |
| en | Page anchor is outside its corresponding page container. | 2 | page_11<br>page_28 |
| en | Source display groups are merged, missing or unverified. | 1 | page 2 |

## Pagini de traducere de corectat

Nu au fost identificate pagini de traducere de corectat.

## Corecții aplicate

| Limbă / tip | Fixuri | Fișiere afectate |
|---|---:|---:|
| en / consolidate_styles | 9 | 1 |
| en / presentation | 708 | 1 |
| en / source_display_page | 4 | 1 |
| en / split_source_phrase | 10 | 1 |
