
//request is coming from APIRequestContext
import { APIRequestContext } from "@playwright/test";

export class ApiHelper {
//private variable
    private readonly request: APIRequestContext;
    private readonly baseURL: string;
//initialize
    constructor(request: APIRequestContext, baseURL: string) {
        this.request = request;
        this.baseURL = baseURL;
    }

    //helper methods:

    //GET
//as inside class no need of function keyword
//give endpoint and header(optional param and inform of keyvalue pair so use record)
    async get(endPoint: string, headers?: Record<string, string>) {
        let response = await this.request.get(`${this.baseURL}${endPoint}`, {
            headers: headers   //pw=we need to pass header
        });
        console.log(await response.json(), response.status());
        return {
            status: response.status(),
            body: await response.json()
        }
    }

    //POST, header,json data,ep should be passed
    async post(endPoint: string, data: object, headers?: Record<string, string>) {
        let response = await this.request.post(`${this.baseURL}${endPoint}`, {
            headers: headers,
            data: data
        });
        console.log(await response.json(), response.status());

        return {
            status: response.status(),
            body: await response.json()
        }
    }



    //PUT
    async put(endPoint: string, data: object, headers?: Record<string, string>) {
        let response = await this.request.put(`${this.baseURL}${endPoint}`, {
            headers: headers,
            data: data
        });
        console.log(await response.json(), response.status());

        return {
            status: response.status(),
            body: await response.json()
        }
    }


    //DELETE
    async delete(endPoint: string, headers?: Record<string, string>) {
        let response = await this.request.delete(`${this.baseURL}${endPoint}`, {
            headers: headers
        });
        console.log(response.status());

        return {
            status: response.status(),
        }
    }


}