import { inject } from "@adonisjs/core";
import { HttpBackendContract } from "../../types.js";
import { HttpClient } from "./http_client.js";

@inject()
export class HttpBackend implements HttpBackendContract {
    #baseUrl = 'https://cveawg.mitre.org/api/cve/CVE-'

    constructor(private httpClient: HttpClient) { }

    find(id: string) {
        return this.httpClient.get(this.#baseUrl + id)
    }
}