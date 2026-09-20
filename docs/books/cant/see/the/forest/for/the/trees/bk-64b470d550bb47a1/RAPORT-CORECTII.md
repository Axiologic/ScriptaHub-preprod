Installed: true
Verified candidate installed.

# ValidateBook: raport de corecție

| | |
|---|---|
| **Status** | completed_with_errors |
| **Limbi** | en |
| **Pagini PDF verificate** | 68 |
| **Corecții aplicate** | 2200 |
| **Erori rămase** | 84 |

## Erori clare rămase

| Limbă | Problemă | Cazuri | Exemple de locații |
|---|---|---:|---|
| en | Justified word gaps exceed 0.65 em in sampled rendered lines. | 67 | html:nth-child(1) > body:nth-child(2) > section:nth-child(21) > p:nth-child(3)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(34) > p:nth-child(8)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(46) > p:nth-child(9) |
| en | Un paragraf englez nu are potrivire unica in PDF, deci fontul/marimea nu pot fi certificate. | 16 | #page_3<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(3) > p:nth-child(2)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(3) > p:nth-child(4) |
| en | Source display groups are merged, missing or unverified. | 1 | page 2 |

## Paragrafe sau blocuri posibil lipsă în traduceri

Nu au fost identificate paragrafe sau blocuri posibil lipsă în traduceri.

## Corecții aplicate

| Limbă / tip | Fixuri | Fișiere afectate |
|---|---:|---:|
| en / consolidate_styles | 9 | 1 |
| en / pagination | 4 | 1 |
| en / presentation | 2160 | 1 |
| en / source_display_page | 4 | 1 |
| en / source_image_presentation | 4 | 1 |
| en / source_page_presentation | 4 | 1 |
| en / split_source_phrase | 15 | 1 |
