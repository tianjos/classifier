import { inject } from '@adonisjs/core'
import path from 'node:path'
import { FileBackend } from '../backends/file/file_backend.js'
import { ClassifierContract, Cwe } from '../types.js'

@inject()
export class CweClassifier implements ClassifierContract<Cwe> {
  #fileName = 'cwe.ndjson'

  constructor(private backend: FileBackend) { }

  get(id: unknown) {
    const filePath = path.join(import.meta.dirname, '..', 'payloads', this.#fileName)

    return this.backend.find('id', id, filePath) as Promise<Cwe | null>
  }
}
