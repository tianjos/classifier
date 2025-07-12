import { FileLineContract } from '../../types.js'

export class FakerLineScanner implements FileLineContract {
  find(key: string, value: any, fileName: string): Promise<unknown> {
    if (fileName === 'undefined') {
      return Promise.resolve(null)
    }

    return Promise.resolve({ [key]: value })
  }
}
