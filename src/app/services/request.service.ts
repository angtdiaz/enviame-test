import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class RequestService {

    constructor(private http: HttpClient) {
    }

    async getInfo(offset: number) {
        let params = new HttpParams
        params = params.append("offset", offset)

        return new Promise((resolve) => {
            this.http
                .get(`${environment.apiUrl}`, { params })
                .subscribe(
                    (response: any) => {
                        resolve([true, response.data]);
                    },
                    (error: any) => {
                        resolve([false]);
                    }
                );
        });
    }

    async getInfoByName(name: string) {
        let params = new HttpParams
        params = params.append("nameStartsWith", name)

        return new Promise((resolve) => {
            this.http
                .get(`${environment.apiUrl}`, { params })
                .subscribe(
                    (response: any) => {
                        resolve([true, response.data]);
                    },
                    (error: any) => {
                        resolve([false]);
                    }
                );
        });
    }

}


