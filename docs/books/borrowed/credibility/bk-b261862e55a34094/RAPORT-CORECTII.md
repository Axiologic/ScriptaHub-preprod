Installed: true
Verified candidate installed.

# ValidateBook: raport de corecție

| | |
|---|---|
| **Status** | completed_with_errors |
| **Limbi** | en |
| **Pagini PDF verificate** | 183 |
| **Corecții aplicate** | 0 |
| **Erori rămase** | 748 |

## Erori clare rămase

| Limbă | Problemă | Cazuri | Exemple de locații |
|---|---|---:|---|
| en | Justified word gaps exceed 0.65 em in sampled rendered lines. | 735 | html:nth-child(1) > body:nth-child(2) > section:nth-child(2) > p:nth-child(3)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(4) > p:nth-child(3)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(5) > p:nth-child(2) |
| en | Un paragraf englez nu are potrivire unica in PDF, deci fontul/marimea nu pot fi certificate. | 7 | #page_2<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(2) > p:nth-child(3)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(2) > p:nth-child(5) |
| en | HTML table has no certified source grid; unsupported or ambiguous tables require a native handler. | 6 | html:nth-child(1) > body:nth-child(2) > section:nth-child(3) > div:nth-child(2) > table:nth-child(1)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(162) > div:nth-child(1) > table:nth-child(1)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(167) > div:nth-child(1) > table:nth-child(1) |

## Pagini de traducere de corectat

Nu au fost identificate pagini de traducere de corectat.

## Corecții aplicate

Nicio corecție aplicată.
