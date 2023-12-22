import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Reserva } from "../interfaces/reserva-interface";
import { RoutesEnum } from "../enum/routesEnum";

@Injectable({
    providedIn: 'root'
})

export class RoutingNavigationService {
    constructor(private router: Router) { }

    navigateToRoute(route: RoutesEnum, id?: number): void {
        const url = id ? [route, id] : [route];
        this.router.navigate(url);
    }
}