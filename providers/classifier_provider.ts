import { ApplicationService } from '@adonisjs/core/types'
import { ClassifierManager } from '../src/classifier/main.js'
import { Capec, ClassifierContract, Cve, Cwe } from '../src/types.js'

declare module '@adonisjs/core/types' {
  export interface ContainerBindings {
    'tianjos.classifier': ClassifierManager<{
      capec: ClassifierContract<Capec>
      cwe: ClassifierContract<Cwe>
      cve: ClassifierContract<Cve>
    }>
  }
}

export default class ClassifierProvider {
  constructor(protected app: ApplicationService) { }

  register() {
    this.app.container.alias('tianjos.classifier', ClassifierManager)
  }
}
