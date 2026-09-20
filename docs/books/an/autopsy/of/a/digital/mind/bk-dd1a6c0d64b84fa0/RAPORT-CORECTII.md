Installed: true
Verified candidate installed.

# ValidateBook: raport de corecție

| | |
|---|---|
| **Status** | completed_with_errors |
| **Limbi** | en, pt, it |
| **Pagini PDF verificate** | 147 |
| **Corecții aplicate** | 42588 |
| **Erori rămase** | 360 |

## Erori clare rămase

| Limbă | Problemă | Cazuri | Exemple de locații |
|---|---|---:|---|
| en | Justified word gaps exceed 0.65 em in sampled rendered lines. | 77 | html:nth-child(1) > body:nth-child(2) > section:nth-child(3) > p:nth-child(3)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(2) > p:nth-child(2)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(2) > p:nth-child(4) |
| en | Un paragraf englez nu are potrivire unica in PDF, deci fontul/marimea nu pot fi certificate. | 11 | html:nth-child(1) > body:nth-child(2) > section:nth-child(2) > p:nth-child(4)<br>#page_3<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(3) > p:nth-child(2) |
| pt | p differs from English h2. | 7 | #page_7<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(7) > p:nth-child(2)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(48) > p:nth-child(3) |
| it | p differs from English h2. | 5 | html:nth-child(1) > body:nth-child(2) > section:nth-child(37) > p:nth-child(5)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(67) > p:nth-child(6)<br>#page_68 |
| en | A repeated source passage has no unique local mapping for paragraph font-size or family correction. | 2 | html:nth-child(1) > body:nth-child(2) > section:nth-child(34) > p:nth-child(2)<br>html:nth-child(1) > body:nth-child(2) > article:nth-child(1) > section:nth-child(34) > p:nth-child(2) |
| it | h2 differs from English p. | 2 | html:nth-child(1) > body:nth-child(2) > section:nth-child(38) > h2:nth-child(2)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(150) > h2:nth-child(3) |
| en | PDF list structure or typography differs from HTML. | 1 | page 100 |
| en | Imported reader list structure or typography differs from PDF. | 1 | page 100 |

## Pagini de traducere de corectat

| Limbă | Problemă | Cazuri | Exemple de locații |
|---|---|---:|---|
| pt | Alinierea determinista a gasit unitati de text lipsa sau cu numar de propozitii diferit; agentul insereaza doar textul unitatii lipsa/partiale si lasa restul structurii sa reflueze. | 128 | page 3<br>page 4<br>page 5 |
| it | Alinierea determinista a gasit unitati de text lipsa sau cu numar de propozitii diferit; agentul insereaza doar textul unitatii lipsa/partiale si lasa restul structurii sa reflueze. | 126 | page 3<br>page 4<br>page 5 |

## Corecții aplicate

| Limbă / tip | Fixuri | Fișiere afectate |
|---|---:|---:|
| it / consolidate_styles | 18 | 1 |
| it / presentation | 21402 | 1 |
| pt / consolidate_styles | 18 | 1 |
| pt / presentation | 21150 | 1 |
