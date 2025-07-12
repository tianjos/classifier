export type Capec = {
  id: number
  title: string
  domainsOfAttack: string
  mechanismsOfAttack: string
}

export type Cwe = {
  id: number
  title: string
}

export type Cve = {
  id: string
  title: string

}

// not fully cover
export type CvePayload = {
  dataType: string
  dataVersion: string
  cveMetadata: {
    cveId: string
  }
  containers: {
    cna: {
      title: string
    }
  }
}

export interface FileLineContract {
  find(key: string, value: any, fileName: string): Promise<unknown>
}

export interface HttpClientContract {
  get(url: string): Promise<unknown>
}

export interface FileBackendContract {
  find(key: string, value: any, filePath: string): Promise<unknown>
}

export interface HttpBackendContract {
  find(id: string): Promise<unknown>
}

export interface ClassifierContract<T> {
  get(id: number): Promise<T | null>
  get(id: string): Promise<T | null>
}