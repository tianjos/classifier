import { createReadStream, ReadStream } from 'node:fs'
import { createInterface, Interface } from 'node:readline'
import { FileLineContract } from '../../types.js'

export class FileLineScanner implements FileLineContract {
  #stream!: ReadStream

  #readLine!: Interface

  async find(key: string, value: any, filePath: string) {
    let found: null

    return new Promise((resolve, reject) => {
      this.#stream = createReadStream(filePath)

      this.#readLine = createInterface({
        input: this.#stream,
        crlfDelay: Infinity,
      })

      this.#readLine.on('line', (line) => {
        const obj = JSON.parse(line)

        if (obj[key] === value) {
          found = obj
          this.#clean()
        }
      })

      this.#readLine.on('close', () => {
        if (!found) {
          resolve(null)
        }
        resolve(found)
      })

      this.#stream.on('error', reject)
    })
  }

  #clean() {
    if (this.#readLine) this.#readLine.close()
    if (this.#stream) this.#stream.destroy()
  }
}
