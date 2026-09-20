Installed: true
Verified candidate installed.

# ValidateBook: raport de corecție

| | |
|---|---|
| **Status** | completed_with_errors |
| **Limbi** | en, fr, de, es, pt, it, ro, pl |
| **Pagini PDF verificate** | 156 |
| **Corecții aplicate** | 617518 |
| **Erori rămase** | 893 |

## Erori clare rămase

| Limbă | Problemă | Cazuri | Exemple de locații |
|---|---|---:|---|
| en | Justified word gaps exceed 0.65 em in sampled rendered lines. | 333 | html:nth-child(1) > body:nth-child(2) > section:nth-child(11) > p:nth-child(4)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(12) > p:nth-child(13)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(21) > p:nth-child(14) |
| pl | English presentation classes differ. | 44 | #page_2<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(2) > p:nth-child(2)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(2) > p:nth-child(3) |
| de | English presentation classes differ. | 43 | #page_2<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(2) > p:nth-child(2)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(2) > p:nth-child(3) |
| es | English presentation classes differ. | 43 | #page_2<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(2) > p:nth-child(2)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(2) > p:nth-child(3) |
| fr | English presentation classes differ. | 43 | #page_2<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(2) > p:nth-child(2)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(2) > p:nth-child(3) |
| it | English presentation classes differ. | 43 | #page_2<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(2) > p:nth-child(2)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(2) > p:nth-child(3) |
| pt | English presentation classes differ. | 43 | #page_2<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(2) > p:nth-child(2)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(2) > p:nth-child(3) |
| ro | English presentation classes differ. | 43 | #page_2<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(2) > p:nth-child(2)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(2) > p:nth-child(3) |
| en | Rendered paragraph font family differs from the uniquely matched PDF face. | 34 | #page_7<br>#page_12<br>#page_16 |
| ro | p differs from English h2. | 32 | #page_21<br>#page_24<br>#page_28 |
| es | p differs from English h2. | 26 | #page_21<br>#page_25<br>#page_29 |
| it | p differs from English h2. | 26 | #page_21<br>#page_25<br>#page_29 |
| pt | p differs from English h2. | 26 | #page_24<br>#page_28<br>#page_33 |
| de | p differs from English h2. | 25 | html:nth-child(1) > body:nth-child(2) > section:nth-child(21) > p:nth-child(2)<br>#page_25<br>#page_29 |
| fr | p differs from English h2. | 24 | #page_25<br>#page_29<br>#page_34 |
| pl | p differs from English h2. | 21 | #page_24<br>#page_28<br>#page_33 |
| en | Un paragraf englez nu are potrivire unica in PDF, deci fontul/marimea nu pot fi certificate. | 7 | #page_3<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(3) > p:nth-child(3)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(3) > p:nth-child(5) |
| de | p differs from English h1. | 2 | #page_46<br>#page_83 |
| es | p differs from English h1. | 2 | #page_45<br>#page_119 |
| fr | p differs from English h1. | 2 | #page_46<br>#page_83 |
| it | p differs from English h1. | 2 | #page_45<br>#page_119 |
| pl | p differs from English h1. | 2 | #page_45<br>#page_119 |
| en | Display typography or source spacing differs from PDF. | 1 | page 2 |
| pt | p differs from English h1. | 1 | #page_118 |

## Pagini de traducere de corectat

| Limbă | Problemă | Cazuri | Exemple de locații |
|---|---|---:|---|
| pl | Alinierea determinista a gasit unitati de text lipsa sau cu numar de propozitii diferit; agentul insereaza doar textul unitatii lipsa/partiale si lasa restul structurii sa reflueze. | 20 | page 20<br>page 21<br>page 26 |
| fr | Alinierea determinista a gasit unitati de text lipsa sau cu numar de propozitii diferit; agentul insereaza doar textul unitatii lipsa/partiale si lasa restul structurii sa reflueze. | 4 | page 20<br>page 99<br>page 138 |
| pt | Alinierea determinista a gasit unitati de text lipsa sau cu numar de propozitii diferit; agentul insereaza doar textul unitatii lipsa/partiale si lasa restul structurii sa reflueze. | 1 | page 20 |

## Corecții aplicate

| Limbă / tip | Fixuri | Fișiere afectate |
|---|---:|---:|
| de / consolidate_styles | 18 | 1 |
| de / empty_translated_page_removed | 23 | 1 |
| de / presentation | 89017 | 1 |
| de / resegment_run | 16 | 1 |
| de / translated_contents_presentation | 18 | 1 |
| es / consolidate_styles | 18 | 1 |
| es / empty_translated_page_removed | 23 | 1 |
| es / presentation | 88981 | 1 |
| es / resegment_run | 5 | 1 |
| es / translated_contents_presentation | 18 | 1 |
| fr / consolidate_styles | 18 | 1 |
| fr / presentation | 88074 | 1 |
| fr / resegment_run | 54 | 1 |
| fr / translated_contents_presentation | 18 | 1 |
| it / consolidate_styles | 18 | 1 |
| it / empty_translated_page_removed | 23 | 1 |
| it / presentation | 88917 | 1 |
| it / resegment_run | 10 | 1 |
| it / translated_contents_presentation | 18 | 1 |
| pl / consolidate_styles | 18 | 1 |
| pl / empty_translated_page_removed | 9 | 1 |
| pl / presentation | 84341 | 1 |
| pl / resegment_run | 60 | 1 |
| pl / translated_contents_presentation | 18 | 1 |
| pt / consolidate_styles | 18 | 1 |
| pt / empty_translated_page_removed | 23 | 1 |
| pt / presentation | 88741 | 1 |
| pt / resegment_run | 11 | 1 |
| pt / translated_contents_presentation | 18 | 1 |
| ro / consolidate_styles | 18 | 1 |
| ro / presentation | 88938 | 1 |
| ro / translated_contents_presentation | 18 | 1 |
