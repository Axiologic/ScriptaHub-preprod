Installed: true
Verified candidate installed.

# ValidateBook: raport de corecție

| | |
|---|---|
| **Status** | completed_with_errors |
| **Limbi** | en, ro |
| **Pagini PDF verificate** | 75 |
| **Corecții aplicate** | 4814 |
| **Erori rămase** | 1280 |

## Erori clare rămase

| Limbă | Problemă | Cazuri | Exemple de locații |
|---|---|---:|---|
| en | Rendered paragraph font family differs from the uniquely matched PDF face. | 848 | html:nth-child(1) > body:nth-child(2) > section:nth-child(3) > p:nth-child(2)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(3) > p:nth-child(3)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(3) > p:nth-child(4) |
| en | Justified word gaps exceed 0.65 em in sampled rendered lines. | 412 | #page_34<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(35) > p:nth-child(6)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(49) > p:nth-child(6) |
| en | PDF font family was not found among actual rendered HTML fonts or the deterministic subset-name mapping. | 6 | AAAAAA+EBGaramond-Regular<br>BAAAAA+EBGaramond-Italic<br>CAAAAA+NotoSerif-Bold |
| en | Source display groups are merged, missing or unverified. | 3 | page 30<br>page 48<br>page 60 |

## Pagini de traducere de corectat

| Limbă | Problemă | Cazuri | Exemple de locații |
|---|---|---:|---|
| ro | Alinierea determinista a gasit unitati de text lipsa sau cu numar de propozitii diferit; agentul insereaza doar textul unitatii lipsa/partiale si lasa restul structurii sa reflueze. | 11 | page 5<br>page 6<br>page 16 |

## Corecții aplicate

| Limbă / tip | Fixuri | Fișiere afectate |
|---|---:|---:|
| en / consolidate_styles | 4 | 1 |
| en / cover_page_normalised | 4 | 1 |
| en / pagination | 2 | 1 |
| en / presentation | 1320 | 1 |
| en / source_display_page | 10 | 1 |
| en / source_image_presentation | 2 | 1 |
| en / source_page_presentation | 2 | 1 |
| en / split_source_phrase | 6 | 1 |
| ro / consolidate_styles | 4 | 1 |
| ro / cover_page_normalised | 4 | 1 |
| ro / empty_anchor_removed | 4 | 1 |
| ro / presentation | 3439 | 1 |
| ro / translated_contents_presentation | 4 | 1 |
| ro / translated_contents_recovery | 1 | 1 |
| ro / translated_pagination | 4 | 1 |
| ro / translation_page_anchors | 4 | 1 |

