Installed: true
Verified candidate installed.

# ValidateBook: raport de corecție

| | |
|---|---|
| **Status** | completed_with_errors |
| **Limbi** | en |
| **Pagini PDF verificate** | 110 |
| **Corecții aplicate** | 3842 |
| **Erori rămase** | 250 |

## Erori clare rămase

| Limbă | Problemă | Cazuri | Exemple de locații |
|---|---|---:|---|
| en | Justified word gaps exceed 0.65 em in sampled rendered lines. | 242 | html:nth-child(1) > body:nth-child(2) > section:nth-child(17) > p:nth-child(2)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(36) > p:nth-child(5)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(58) > p:nth-child(3) |
| en | Un paragraf englez nu are potrivire unica in PDF, deci fontul/marimea nu pot fi certificate. | 7 | #page_3<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(3) > p:nth-child(3)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(3) > p:nth-child(5) |
| en | Source display groups are merged, missing or unverified. | 1 | page 2 |

## Pagini de traducere de corectat

Nu au fost identificate pagini de traducere de corectat.

## Corecții aplicate

| Limbă / tip | Fixuri | Fișiere afectate |
|---|---:|---:|
| en / consolidate_styles | 9 | 1 |
| en / pagination | 4 | 1 |
| en / presentation | 3812 | 1 |
| en / source_display_page | 4 | 1 |
| en / source_image_presentation | 4 | 1 |
| en / source_page_presentation | 4 | 1 |
| en / split_source_phrase | 5 | 1 |
