import { Routes } from '@angular/router';
import { CarsListComponent } from './Cars/cars-list/cars-list.component';
import { CarDetailComponent } from './Cars/car-detail/car-detail.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: 'car-list', component: CarsListComponent },
    { path: 'car-detail/:id', component: CarDetailComponent },
    { path: 'welcome', component: WelcomeComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];
