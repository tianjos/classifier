import { inject } from '@adonisjs/core'
import path from 'node:path'
import { FileBackend } from '../backends/file/file_backend.js'
import { Capec, ClassifierContract, FileBackendContract } from '../types.js'

@inject()
export class CapecClassifier implements ClassifierContract<Capec> {
  #fileName = 'capec.ndjson'

  #backend: FileBackendContract

  constructor(backend: FileBackend) {
    this.#backend = backend
  }

  get(id: unknown) {
    const filePath = path.join(import.meta.dirname, '..', 'payloads', this.#fileName)

    return this.#backend.find('id', id, filePath) as Promise<Capec | null>
  }
}
