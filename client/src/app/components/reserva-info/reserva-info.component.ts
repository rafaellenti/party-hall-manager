import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RoutingNavigationService } from '../../services/routingNavigationService';
import { ApiService } from '../../services/api-service';
import { Reserva } from '../../interfaces/reserva-interface';

@Component({
    selector: 'app-reserva-info',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './reserva-info.component.html',
    styleUrl: './reserva-info.component.scss'
})


export class ReservaInfoComponent implements OnInit, OnDestroy {
    subscription: Subscription | undefined;
    private reservaId: string | null = null;
    public reserva: Reserva = {
        id: 0,
        date: '',
        residentName: ''
    };

    constructor(private apiService: ApiService, private route: ActivatedRoute, private routingNavigationService: RoutingNavigationService) { }

    ngOnInit(): void {
        this.getReserva();
    }

    getReserva(): void {
        this.reservaId = this.route.snapshot.paramMap.get('id');

        if (this.reservaId) {
            const id = parseInt(this.reservaId, 10)

            this.subscription = this.apiService.getReserva(id).subscribe({
                next: (response) => {
                    this.reserva = response;
                },
                error: (error) => {
                    console.log(error);
                }
            })
        }
    }

    ngOnDestroy() {
        this.subscription?.unsubscribe();
    }
}