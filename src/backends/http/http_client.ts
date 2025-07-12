import { HttpClientContract } from "../../types.js";

export class HttpClient implements HttpClientContract {
    get(url: string) {
        return fetch(url).then((response) => {
            if (response.status !== 200) return Promise.resolve(null)
            return response.json()
        })
    }
}