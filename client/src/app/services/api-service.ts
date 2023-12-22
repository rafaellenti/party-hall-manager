import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reserva } from "../interfaces/reserva-interface";

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    private api = 'http://localhost:8080/reservas';

    constructor(private http: HttpClient) { }

    getReservaList(): Observable<any> {
        return this.http.get(this.api);
    }

    getReserva(id: number): Observable<any> {
        return this.http.get(`${this.api}/${id}`);
    }

    createReserva(data: object): Observable<any> {
        return this.http.post(this.api, data);
    }

    updateReserva(data: object): Observable<any> {
        return this.http.put(this.api, data);
    }

    deleteReserva(id: number): Observable<any> {
        return this.http.delete(`${this.api}/${id}`);
    }
}