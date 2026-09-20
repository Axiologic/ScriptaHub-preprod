Installed: true
Verified candidate installed.

# ValidateBook: raport de corecție

| | |
|---|---|
| **Status** | completed_with_errors |
| **Limbi** | en, fr, de, es, pt, it, ro, pl |
| **Pagini PDF verificate** | 83 |
| **Corecții aplicate** | 73008 |
| **Erori rămase** | 441 |

## Erori clare rămase

| Limbă | Problemă | Cazuri | Exemple de locații |
|---|---|---:|---|
| en | Justified word gaps exceed 0.65 em in sampled rendered lines. | 95 | html:nth-child(1) > body:nth-child(2) > section:nth-child(9) > p:nth-child(5)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(35) > p:nth-child(5)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(54) > p:nth-child(5) |
| fr | p differs from English h2. | 12 | #page_10<br>#page_15<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(19) > p:nth-child(3) |
| pt | p differs from English h2. | 12 | html:nth-child(1) > body:nth-child(2) > section:nth-child(17) > p:nth-child(6)<br>#page_23<br>#page_27 |
| de | p differs from English h2. | 10 | #page_16<br>#page_27<br>#page_32 |
| en | Un paragraf englez nu are potrivire unica in PDF, deci fontul/marimea nu pot fi certificate. | 7 | #page_3<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(3) > p:nth-child(2)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(3) > p:nth-child(4) |
| es | p differs from English h2. | 7 | #page_10<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(13) > p:nth-child(4)<br>#page_21 |
| pl | p differs from English h2. | 4 | #page_31<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(70) > p:nth-child(4)<br>#page_75 |
| fr | h2 differs from English p. | 3 | html:nth-child(1) > body:nth-child(2) > section:nth-child(2) > h2:nth-child(2)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(20) > h2:nth-child(2)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(65) > h2:nth-child(2) |
| ro | h2 differs from English p. | 3 | html:nth-child(1) > body:nth-child(2) > section:nth-child(2) > h2:nth-child(2)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(38) > h2:nth-child(2)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(63) > h2:nth-child(2) |
| ro | p differs from English h2. | 3 | #page_37<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(79) > p:nth-child(4)<br>#page_81 |
| de | h2 differs from English p. | 2 | html:nth-child(1) > body:nth-child(2) > section:nth-child(2) > h2:nth-child(2)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(49) > h2:nth-child(2) |
| pt | h2 differs from English p. | 2 | html:nth-child(1) > body:nth-child(2) > section:nth-child(2) > h2:nth-child(2)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(18) > h2:nth-child(2) |
| en | Source display groups are merged, missing or unverified. | 1 | page 2 |
| es | Error: Repair changed text; layout-only changes must preserve prose exactly at applyDomRepairs (<anonymous>:527:175) at <anonymous>:531:3 | 1 | translation-presentation |
| es | Error: Repair changed text; layout-only changes must preserve prose exactly at applyDomRepairs (<anonymous>:527:175) at <anonymous>:531:3 | 1 | safe-visible-content |
| es | h2 differs from English p. | 1 | html:nth-child(1) > body:nth-child(2) > section:nth-child(2) > h2:nth-child(2) |
| it | h2 differs from English p. | 1 | html:nth-child(1) > body:nth-child(2) > section:nth-child(2) > h2:nth-child(2) |
| it | p differs from English h2. | 1 | html:nth-child(1) > body:nth-child(2) > section:nth-child(85) > p:nth-child(5) |
| pl | h2 differs from English p. | 1 | html:nth-child(1) > body:nth-child(2) > section:nth-child(2) > h2:nth-child(2) |

## Pagini de traducere de corectat

| Limbă | Problemă | Cazuri | Exemple de locații |
|---|---|---:|---|
| it | Alinierea determinista a gasit unitati de text lipsa sau cu numar de propozitii diferit; agentul insereaza doar textul unitatii lipsa/partiale si lasa restul structurii sa reflueze. | 66 | page 5<br>page 6<br>page 7 |
| ro | Alinierea determinista a gasit unitati de text lipsa sau cu numar de propozitii diferit; agentul insereaza doar textul unitatii lipsa/partiale si lasa restul structurii sa reflueze. | 66 | page 4<br>page 5<br>page 6 |
| pl | Alinierea determinista a gasit unitati de text lipsa sau cu numar de propozitii diferit; agentul insereaza doar textul unitatii lipsa/partiale si lasa restul structurii sa reflueze. | 46 | page 4<br>page 5<br>page 6 |
| es | Alinierea determinista a gasit unitati de text lipsa sau cu numar de propozitii diferit; agentul insereaza doar textul unitatii lipsa/partiale si lasa restul structurii sa reflueze. | 39 | page 4<br>page 5<br>page 6 |
| fr | Alinierea determinista a gasit unitati de text lipsa sau cu numar de propozitii diferit; agentul insereaza doar textul unitatii lipsa/partiale si lasa restul structurii sa reflueze. | 21 | page 4<br>page 5<br>page 6 |
| pt | Alinierea determinista a gasit unitati de text lipsa sau cu numar de propozitii diferit; agentul insereaza doar textul unitatii lipsa/partiale si lasa restul structurii sa reflueze. | 20 | page 3<br>page 4<br>page 5 |
| de | Alinierea determinista a gasit unitati de text lipsa sau cu numar de propozitii diferit; agentul insereaza doar textul unitatii lipsa/partiale si lasa restul structurii sa reflueze. | 16 | page 4<br>page 5<br>page 6 |

## Corecții aplicate

| Limbă / tip | Fixuri | Fișiere afectate |
|---|---:|---:|
| de / consolidate_styles | 18 | 1 |
| de / presentation | 14265 | 1 |
| de / translated_contents_presentation | 18 | 1 |
| en / consolidate_styles | 18 | 1 |
| en / pagination | 9 | 1 |
| en / presentation | 4365 | 1 |
| en / source_contents_recovery | 18 | 1 |
| en / source_display_page | 9 | 1 |
| en / source_image_presentation | 99 | 1 |
| en / source_page_presentation | 9 | 1 |
| en / split_source_phrase | 18 | 1 |
| fr / consolidate_styles | 18 | 1 |
| fr / presentation | 13869 | 1 |
| fr / translated_contents_presentation | 18 | 1 |
| it / consolidate_styles | 18 | 1 |
| it / presentation | 8343 | 1 |
| it / translated_contents_presentation | 18 | 1 |
| pl / consolidate_styles | 18 | 1 |
| pl / presentation | 10557 | 1 |
| pt / consolidate_styles | 18 | 1 |
| pt / presentation | 12924 | 1 |
| ro / consolidate_styles | 18 | 1 |
| ro / presentation | 8325 | 1 |
| ro / translated_contents_presentation | 18 | 1 |
