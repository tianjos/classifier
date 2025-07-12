# Experimental package

> Classifiers: cwe, cve and capec

## Usage
```
import { classifier } from '@tianjos/classifier/services'

await classifier.use('cwe').get(100) // { id: 1, title: 'foo' }

await classifier.use('capec').get(100) // { id: 1, title: 'foo', domainsOfAttack: 'foo', mechanismsOfAttack: 'foo' }

await classifier.use('cve').get('2025-2055') // { id: 'CVE-2025-2055', title: 'foo'}

// return null when not found
```

