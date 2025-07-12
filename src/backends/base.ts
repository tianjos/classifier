export abstract class BaseBackend<T> {
  abstract get(id: number): Promise<T>
  abstract exists(id: number): Promise<T>
  abstract find(key: string): Promise<T>
}
