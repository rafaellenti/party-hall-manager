import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { RoutingNavigationService } from '../../services/routingNavigationService';
import { ApiService } from '../../services/api-service';
import { RoutesEnum } from '../../enum/routesEnum';
import { Reserva } from '../../interfaces/reserva-interface';

@Component({
    selector: 'app-edit-reserva',
    standalone: true,
    imports: [CommonModule, ReactiveFormsModule],
    templateUrl: './edit-reserva.component.html',
    styleUrl: './edit-reserva.component.scss'
})


export class EditReservaComponent implements OnInit, OnDestroy {
    subscription: Subscription | undefined;
    private reservaId: string | null = null;
    public reserva: Reserva = {
        id: 0,
        date: '',
        residentName: ''
    };

    reservaForm = new FormGroup({
        date: new FormControl('', Validators.required),
        residentName: new FormControl('', Validators.required)
    })

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
                    this.reservaForm.patchValue({
                        date: this.reserva.date,
                        residentName: this.reserva.residentName
                    });
                },
                error: (error) => {
                    console.log(error);
                }
            })
        }
    }

    updateReserva(): void {
        this.reservaId = this.route.snapshot.paramMap.get('id');

        if (this.reservaId) {
            const id = parseInt(this.reservaId, 10)
            const newReserva: object = {
                id: id,
                date: this.reservaForm.value.date,
                residentName: this.reservaForm.value.residentName,
            }

            this.subscription = this.apiService.updateReserva(newReserva).subscribe({
                next: () => {
                    this.routingNavigationService.navigateToRoute(RoutesEnum.Home);
                },
                error: (error) => {
                    console.log(error);
                }
            })
        }
    }

    onSubmit(): void {
        this.updateReserva();
    }

    ngOnDestroy() {
        this.subscription?.unsubscribe();
    }
}