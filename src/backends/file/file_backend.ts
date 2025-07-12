import { inject } from '@adonisjs/core'
import { FileBackendContract } from '../../types.js'
import { FileLineScanner } from './file_scanner.js'

@inject()
export class FileBackend implements FileBackendContract {
  constructor(private scanner: FileLineScanner) {}

  find(key: string, value: any, filePath: string): Promise<unknown> {
    return this.scanner.find(key, value, filePath)
  }
}
