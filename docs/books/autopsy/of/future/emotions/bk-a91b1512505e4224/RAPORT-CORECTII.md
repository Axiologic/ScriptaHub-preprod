Installed: true
Verified candidate installed.

# ValidateBook: raport de corecție

| | |
|---|---|
| **Status** | completed_with_errors |
| **Limbi** | en, fr, de, es, pt, it, ro, pl |
| **Pagini PDF verificate** | 85 |
| **Corecții aplicate** | 20814 |
| **Erori rămase** | 375 |

## Erori clare rămase

| Limbă | Problemă | Cazuri | Exemple de locații |
|---|---|---:|---|
| en | Justified word gaps exceed 0.65 em in sampled rendered lines. | 101 | html:nth-child(1) > body:nth-child(2) > section:nth-child(6) > p:nth-child(3)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(17) > p:nth-child(6)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(23) > p:nth-child(6) |
| en | Un paragraf englez nu are potrivire unica in PDF, deci fontul/marimea nu pot fi certificate. | 17 | #page_2<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(2) > p:nth-child(3)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(2) > p:nth-child(5) |
| de | p differs from English h2. | 10 | #page_10<br>#page_13<br>#page_19 |
| es | p differs from English h2. | 10 | #page_10<br>#page_19<br>#page_34 |
| pl | p differs from English h2. | 9 | #page_10<br>#page_30<br>#page_38 |
| en | HTML table has no certified source grid; unsupported or ambiguous tables require a native handler. | 6 | html:nth-child(1) > body:nth-child(2) > section:nth-child(75) > div:nth-child(4) > table:nth-child(1)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(76) > div:nth-child(3) > table:nth-child(1)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(77) > div:nth-child(1) > table:nth-child(1) |
| fr | p differs from English h2. | 5 | #page_10<br>#page_13<br>#page_34 |
| it | p differs from English h2. | 4 | #page_10<br>#page_24<br>#page_37 |
| pt | p differs from English h2. | 3 | #page_10<br>#page_24<br>#page_42 |
| ro | p differs from English h2. | 3 | html:nth-child(1) > body:nth-child(2) > section:nth-child(5) > p:nth-child(5)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(94) > p:nth-child(5)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(107) > p:nth-child(6) |
| ro | h2 differs from English p. | 2 | html:nth-child(1) > body:nth-child(2) > section:nth-child(61) > h2:nth-child(4)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(94) > h2:nth-child(2) |
| de | h2 differs from English p. | 1 | html:nth-child(1) > body:nth-child(2) > section:nth-child(61) > h2:nth-child(7) |

## Pagini de traducere de corectat

| Limbă | Problemă | Cazuri | Exemple de locații |
|---|---|---:|---|
| ro | Alinierea determinista a gasit unitati de text lipsa sau cu numar de propozitii diferit; agentul insereaza doar textul unitatii lipsa/partiale si lasa restul structurii sa reflueze. | 66 | page 3<br>page 4<br>page 6 |
| fr | Alinierea determinista a gasit unitati de text lipsa sau cu numar de propozitii diferit; agentul insereaza doar textul unitatii lipsa/partiale si lasa restul structurii sa reflueze. | 33 | page 3<br>page 4<br>page 5 |
| it | Alinierea determinista a gasit unitati de text lipsa sau cu numar de propozitii diferit; agentul insereaza doar textul unitatii lipsa/partiale si lasa restul structurii sa reflueze. | 26 | page 3<br>page 4<br>page 5 |
| de | Alinierea determinista a gasit unitati de text lipsa sau cu numar de propozitii diferit; agentul insereaza doar textul unitatii lipsa/partiale si lasa restul structurii sa reflueze. | 25 | page 3<br>page 4<br>page 5 |
| pl | Alinierea determinista a gasit unitati de text lipsa sau cu numar de propozitii diferit; agentul insereaza doar textul unitatii lipsa/partiale si lasa restul structurii sa reflueze. | 20 | page 2<br>page 3<br>page 5 |
| pt | Alinierea determinista a gasit unitati de text lipsa sau cu numar de propozitii diferit; agentul insereaza doar textul unitatii lipsa/partiale si lasa restul structurii sa reflueze. | 20 | page 3<br>page 4<br>page 5 |
| es | Alinierea determinista a gasit unitati de text lipsa sau cu numar de propozitii diferit; agentul insereaza doar textul unitatii lipsa/partiale si lasa restul structurii sa reflueze. | 14 | page 3<br>page 4<br>page 5 |

## Corecții aplicate

| Limbă / tip | Fixuri | Fișiere afectate |
|---|---:|---:|
| de / consolidate_styles | 6 | 1 |
| de / presentation | 2898 | 1 |
| es / consolidate_styles | 6 | 1 |
| es / presentation | 3006 | 1 |
| fr / consolidate_styles | 6 | 1 |
| fr / presentation | 2760 | 1 |
| it / consolidate_styles | 6 | 1 |
| it / presentation | 2856 | 1 |
| pl / consolidate_styles | 6 | 1 |
| pl / presentation | 2970 | 1 |
| pt / consolidate_styles | 6 | 1 |
| pt / presentation | 2910 | 1 |
| ro / consolidate_styles | 6 | 1 |
| ro / presentation | 3372 | 1 |
