Installed: true
Verified candidate installed.

# ValidateBook: raport de corecție

| | |
|---|---|
| **Status** | completed_with_errors |
| **Limbi** | en, ro |
| **Pagini PDF verificate** | 80 |
| **Corecții aplicate** | 3374 |
| **Erori rămase** | 203 |

## Erori clare rămase

| Limbă | Problemă | Cazuri | Exemple de locații |
|---|---|---:|---|
| en | Justified word gaps exceed 0.65 em in sampled rendered lines. | 94 | html:nth-child(1) > body:nth-child(2) > section:nth-child(42) > p:nth-child(4)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(53) > p:nth-child(6)<br>#page_54 |
| en | Un paragraf englez nu are potrivire unica in PDF, deci fontul/marimea nu pot fi certificate. | 24 | #page_3<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(3) > p:nth-child(2)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(3) > p:nth-child(4) |
| en | Candidate installation rejected: reader_page_geometry_override | 6 | all<br>pagination<br>tables |
| en | Source table has no unique complete cell/text/span mapping. | 4 | PDF page 5<br>PDF page 23<br>PDF page 53 |
| ro | p differs from English h2. | 2 | html:nth-child(1) > body:nth-child(2) > section:nth-child(4) > p:nth-child(7)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(13) > p:nth-child(17) |

## Pagini de traducere de corectat

| Limbă | Problemă | Cazuri | Exemple de locații |
|---|---|---:|---|
| ro | Alinierea determinista a gasit unitati de text lipsa sau cu numar de propozitii diferit; agentul insereaza doar textul unitatii lipsa/partiale si lasa restul structurii sa reflueze. | 73 | page 3<br>page 5<br>page 6 |

## Corecții aplicate

| Limbă / tip | Fixuri | Fișiere afectate |
|---|---:|---:|
| ro / consolidate_styles | 6 | 1 |
| ro / empty_translated_page_removed | 10 | 1 |
| ro / presentation | 3343 | 1 |
| ro / tag | 3 | 1 |
| ro / translated_pagination | 6 | 1 |
| ro / translation_page_anchors | 6 | 1 |

