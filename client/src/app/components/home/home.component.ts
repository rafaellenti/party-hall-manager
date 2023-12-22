import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingNavigationService } from '../../services/routingNavigationService';
import { Reserva } from '../../interfaces/reserva-interface';
import { ApiService } from '../../services/api-service';
import { RoutesEnum } from '../../enum/routesEnum';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent implements OnInit {
  public routesEnum = RoutesEnum;
  subscription: Subscription | undefined;

  constructor(private apiService: ApiService, public routingNavigationService: RoutingNavigationService) { }

  public reservaList: Reserva[] = [];

  ngOnInit() {
    this.getReservaList();
  }

  getReservaList(): void {
    this.apiService.getReservaList().subscribe({
      next: (data: Reserva[]) => {
        this.reservaList = data;
      },
      error: (error: any) => {
        console.error('Erro ao carregar reservas', error);
      }
    });
  }

  deleteReserva(reservaId: number): void {
    this.apiService.deleteReserva(reservaId).subscribe({
      next: () => {
        this.reservaList = this.reservaList.filter(reserva => reserva.id !== reservaId);
      },
      error: (error: any) => {
        console.log(error);
      }
    });
  }
}
