import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ReservaInfoComponent } from './components/reserva-info/reserva-info.component';
import { AddReservaComponent } from './components/add-reserva/add-reserva.component';
import { EditReservaComponent } from './components/edit-reserva/edit-reserva.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'Home'
    },
    {
        path: 'reserva-info/:id',
        component: ReservaInfoComponent,
        title: 'Reserva Info'
    },
    {
        path: 'add',
        component: AddReservaComponent,
        title: 'Add Reserva'
    },
    {
        path: 'edit/:id',
        component: EditReservaComponent,
        title: 'Edit Reserva'
    }
];

export default routes;
