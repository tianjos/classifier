import { inject } from '@adonisjs/core'
import { ClassifierContract } from '../types.js'
import { CapecClassifier } from './capec.js'

@inject()
export class ClassifierManager<Classifiers extends Record<string, ClassifierContract<any>>> {
  #classifiers: Map<keyof Classifiers, ClassifierContract<any>> = new Map()

  constructor(private capec: CapecClassifier) {
    this.#classifiers.set('capec', this.capec)
  }

  use<K extends keyof Classifiers>(classifier: K): Classifiers[K] {
    return this.#classifiers.get(classifier)! as Classifiers[K]
  }
}
