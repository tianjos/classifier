# Experimental package

> Classifiers: cwe, cve and capec

## Usage
```
import { classifier } from '@tianjos/classifier/services'

await classifier.use('cwe').get(1) // { id: 1, title: 'foo' }
```

