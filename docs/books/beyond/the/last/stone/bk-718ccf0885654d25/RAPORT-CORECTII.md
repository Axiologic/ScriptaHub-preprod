Installed: true
Verified candidate installed.

# ValidateBook: raport de corecție

| | |
|---|---|
| **Status** | completed_with_errors |
| **Limbi** | en |
| **Pagini PDF verificate** | 68 |
| **Corecții aplicate** | 5223 |
| **Erori rămase** | 218 |

## Erori clare rămase

| Limbă | Problemă | Cazuri | Exemple de locații |
|---|---|---:|---|
| en | Justified word gaps exceed 0.65 em in sampled rendered lines. | 209 | html:nth-child(1) > body:nth-child(2) > section:nth-child(4) > p:nth-child(2)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(4) > p:nth-child(3)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(4) > p:nth-child(4) |
| en | Un paragraf englez nu are potrivire unica in PDF, deci fontul/marimea nu pot fi certificate. | 7 | #page_4<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(4) > p:nth-child(2)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(4) > p:nth-child(3) |
| en | A repeated source passage has no unique local mapping for paragraph font-size or family correction. | 2 | html:nth-child(1) > body:nth-child(2) > section:nth-child(47) > p:nth-child(3)<br>html:nth-child(1) > body:nth-child(2) > article:nth-child(1) > section:nth-child(47) > p:nth-child(3) |

## Pagini de traducere de corectat

Nu au fost identificate pagini de traducere de corectat.

## Corecții aplicate

| Limbă / tip | Fixuri | Fișiere afectate |
|---|---:|---:|
| en / consolidate_styles | 9 | 1 |
| en / pagination | 5 | 1 |
| en / presentation | 5190 | 1 |
| en / source_display_page | 5 | 1 |
| en / source_image_presentation | 5 | 1 |
| en / source_page_presentation | 5 | 1 |
| en / split_source_phrase | 4 | 1 |
