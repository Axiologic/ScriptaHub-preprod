Installed: true
Verified candidate installed.

# ValidateBook: raport de corecție

| | |
|---|---|
| **Status** | completed_with_errors |
| **Limbi** | en |
| **Pagini PDF verificate** | 71 |
| **Corecții aplicate** | 0 |
| **Erori rămase** | 525 |

## Erori clare rămase

| Limbă | Problemă | Cazuri | Exemple de locații |
|---|---|---:|---|
| en | Justified word gaps exceed 0.65 em in sampled rendered lines. | 514 | html:nth-child(1) > body:nth-child(2) > section:nth-child(15) > p:nth-child(3)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(15) > p:nth-child(7)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(17) > p:nth-child(9) |
| en | Un paragraf englez nu are potrivire unica in PDF, deci fontul/marimea nu pot fi certificate. | 8 | html:nth-child(1) > body:nth-child(2) > section:nth-child(2) > p:nth-child(2)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(2) > p:nth-child(4)<br>html:nth-child(1) > body:nth-child(2) > section:nth-child(2) > p:nth-child(7) |
| en | HTML table has no certified source grid; unsupported or ambiguous tables require a native handler. | 2 | html:nth-child(1) > body:nth-child(2) > section:nth-child(4) > div:nth-child(2) > table:nth-child(1)<br>html:nth-child(1) > body:nth-child(2) > article:nth-child(1) > section:nth-child(4) > div:nth-child(2) > table:nth-child(1) |
| en | A repeated source passage has no unique local mapping for paragraph font-size or family correction. | 1 | #page_2 |

## Pagini de traducere de corectat

Nu au fost identificate pagini de traducere de corectat.

## Corecții aplicate

Nicio corecție aplicată.
