import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Reserva } from '../../interfaces/reserva-interface';
import { ApiService } from '../../services/api-service';
import { Subscription } from 'rxjs';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { RoutingNavigationService } from '../../services/routingNavigationService';
import { RoutesEnum } from '../../enum/routesEnum';

@Component({
    selector: 'app-add-reserva',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './add-reserva.component.html',
    styleUrl: './add-reserva.component.scss'
})

export class AddReservaComponent implements OnDestroy {
    subscription: Subscription | undefined;
    public reserva: object = {
        date: '',
        residentName: ''
    };

    reservaForm = new FormGroup({
        date: new FormControl('', Validators.required),
        residentName: new FormControl('', Validators.required)
    })

    constructor(private apiService: ApiService, private routingNavigationService: RoutingNavigationService) { }

    createReserva(): void {
        if (typeof this.reservaForm.value.residentName === 'string' && typeof this.reservaForm.value.date === 'string') {
            const reserva: object = {
                date: this.reservaForm.value.date,
                residentName: this.reservaForm.value.residentName,
            }

            this.apiService.createReserva(reserva).subscribe({
                next: () => {
                    this.routingNavigationService.navigateToRoute(RoutesEnum.Home);
                }
            });
        }
    }

    onSubmit(): void {
        this.createReserva();
    }

    clearFilter() {
        this.reservaForm.reset();
    }

    ngOnDestroy() {
        this.subscription?.unsubscribe();
    }
}
