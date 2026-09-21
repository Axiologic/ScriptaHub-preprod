Installed: true
Verified candidate installed.

# ValidateBook: raport de corecție

| | |
|---|---|
| **Status** | completed_with_errors |
| **Limbi** | en, ro |
| **Pagini PDF verificate** | 62 |
| **Corecții aplicate** | 13543 |
| **Erori rămase** | 1179 |

## Erori clare rămase

| Limbă | Problemă | Cazuri | Exemple de locații |
|---|---|---:|---|
| en | Rendered paragraph font family differs from the uniquely matched PDF face. | 492 | html:nth-child(1) > body:nth-child(2) > section:nth-child(2) > h2:nth-child(1)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(2) > p:nth-child(2)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(2) > p:nth-child(3) |
| en | Table cell fill, border, column proportion or typography differs from the PDF. | 392 | html:nth-child(1) > body:nth-child(2) > section:nth-child(7) > div:nth-child(7) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(3) > tr:nth-child(1) > th:nth-child(1)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(7) > div:nth-child(7) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(3) > tr:nth-child(1) > th:nth-child(2)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(7) > div:nth-child(7) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(3) > tr:nth-child(2) > td:nth-child(1) |
| en | Justified word gaps exceed 0.65 em in sampled rendered lines. | 194 | html:nth-child(1) > body:nth-child(2) > section:nth-child(24) > p:nth-child(6)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(39) > p:nth-child(6)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(2) > p:nth-child(8) |
| ro | English presentation classes differ. | 45 | html:nth-child(1) > body:nth-child(2) > section:nth-child(5) > article:nth-child(1) > p:nth-child(4)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(5) > article:nth-child(1) > p:nth-child(5)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(5) > article:nth-child(1) > p:nth-child(6) |
| en | PDF font family was not found among actual rendered HTML fonts or the deterministic subset-name mapping. | 6 | BAAAAA+LiberationSans<br>CAAAAA+LiberationSerif<br>DAAAAA+LiberationSans-Bold |
| en | Un paragraf englez nu are potrivire unica in PDF, deci fontul/marimea nu pot fi certificate. | 1 | html:nth-child(1) > body:nth-child(2) > section:nth-child(40) > p:nth-child(6) |

## Pagini de traducere de corectat

| Limbă | Problemă | Cazuri | Exemple de locații |
|---|---|---:|---|
| ro | Alinierea determinista a gasit unitati de text lipsa sau cu numar de propozitii diferit; agentul insereaza doar textul unitatii lipsa/partiale si lasa restul structurii sa reflueze. | 49 | page 2<br>page 3<br>page 4 |

## Corecții aplicate

| Limbă / tip | Fixuri | Fișiere afectate |
|---|---:|---:|
| ro / consolidate_styles | 6 | 1 |
| ro / cover_page_normalised | 6 | 1 |
| ro / empty_translated_page_removed | 5 | 1 |
| ro / page_shell_spacing | 2856 | 1 |
| ro / presentation | 10575 | 1 |
| ro / split_table_merged | 90 | 1 |
| ro / translated_pagination | 5 | 1 |

