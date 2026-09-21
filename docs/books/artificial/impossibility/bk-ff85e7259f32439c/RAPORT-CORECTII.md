Installed: true
Verified candidate installed.

# ValidateBook: raport de corecție

| | |
|---|---|
| **Status** | completed_with_errors |
| **Limbi** | en |
| **Pagini PDF verificate** | 130 |
| **Corecții aplicate** | 1009 |
| **Erori rămase** | 1696 |

## Erori clare rămase

| Limbă | Problemă | Cazuri | Exemple de locații |
|---|---|---:|---|
| en | Rendered paragraph font family differs from the uniquely matched PDF face. | 871 | html:nth-child(1) > body:nth-child(2) > section:nth-child(3) > p:nth-child(2)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(3) > p:nth-child(4)<br>#page_4 |
| en | Justified word gaps exceed 0.65 em in sampled rendered lines. | 497 | html:nth-child(1) > body:nth-child(2) > section:nth-child(6) > p:nth-child(2)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(11) > p:nth-child(4)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(27) > p:nth-child(4) |
| en | Table cell fill, border, column proportion or typography differs from the PDF. | 312 | html:nth-child(1) > body:nth-child(2) > section:nth-child(14) > div:nth-child(1) > table:nth-child(1) > thead:nth-child(1) > tr:nth-child(1) > th:nth-child(1)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(14) > div:nth-child(1) > table:nth-child(1) > thead:nth-child(1) > tr:nth-child(1) > th:nth-child(2)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(14) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(1) |
| en | Un paragraf englez nu are potrivire unica in PDF, deci fontul/marimea nu pot fi certificate. | 11 | #page_3<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(3) > p:nth-child(3)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(3) > p:nth-child(5) |
| en | PDF font family was not found among actual rendered HTML fonts or the deterministic subset-name mapping. | 5 | AAAAAA+EBGaramond-Regular<br>BAAAAA+Inter-Bold<br>CAAAAA+EBGaramond-Italic |

## Pagini de traducere de corectat

Nu au fost identificate pagini de traducere de corectat.

## Corecții aplicate

| Limbă / tip | Fixuri | Fișiere afectate |
|---|---:|---:|
| en / consolidate_styles | 1 | 1 |
| en / cover_page_normalised | 1 | 1 |
| en / legacy_layout_stylesheet_removed | 1 | 1 |
| en / pagination | 1 | 1 |
| en / presentation | 1002 | 1 |
| en / source_display_page | 1 | 1 |
| en / source_image_presentation | 1 | 1 |
| en / source_page_presentation | 1 | 1 |

