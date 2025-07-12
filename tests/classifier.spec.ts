import { IgnitorFactory } from '@adonisjs/core/factories'
import { test } from '@japa/runner'
import { FileBackend } from '../src/backends/file/file_backend.js'
import { FileLineScanner } from '../src/backends/file/file_scanner.js'

const BASE_URL = new URL('./tmp/', import.meta.url)

test.group('classifier', () => {
  // group.setup(() => {
  //     const
  //     const capec = new CapecClassifier(new FileBackend())
  //     const classifier = new ClassifierManager()
  // })
  test('cwe', async ({ assert }) => {
    const ignitor = new IgnitorFactory()
      .merge({
        rcFileContents: {
          providers: [() => import('../providers/classifier_provider.js')],
        },
      })
      .create(BASE_URL)

    const app = ignitor.createApp('web')

    await app.init()
    await app.boot()

    assert.isTrue(app.container.hasBinding('tianjos.csc'))
  }).skip()

  test('cwe', ({ assert }) => {
    const filebackend = new FileBackend(new FileLineScanner())

    assert.exists(filebackend)
  })
})
