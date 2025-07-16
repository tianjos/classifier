import app from '@adonisjs/core/services/app'
import { ClassifierManager } from '../src/classifier/main.js'
import { Capec, ClassifierContract, Cve, Cwe } from '../src/types.js'

let classifier: ClassifierManager<{
  capec: ClassifierContract<Capec>
  cwe: ClassifierContract<Cwe>
  cve: ClassifierContract<Cve>
}>

await app.booted(async () => {
  classifier = await app.container.make('tianjos.classifier')
})

export { classifier as default }
