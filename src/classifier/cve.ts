import { HttpBackend } from "../backends/http/http_backend.js";
import { ClassifierContract, Cve, CvePayload } from "../types.js";

export class CveClassifier implements ClassifierContract<Cve> {
    constructor(private httpBackend: HttpBackend) { }

    async get(id: unknown): Promise<Cve | null> {
        const data = await this.httpBackend.find(id as string) as CvePayload
        if (!data) return null

        return Promise.resolve({
            id: data.cveMetadata.cveId,
            title: data.containers.cna.title
        }) as Promise<Cve>
    }
}