import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CarsListComponent } from "./Cars/cars-list/cars-list.component";


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    CarsListComponent,
  ],
  
})
export class AppComponent {
  pageTitlte: string = 'Table of Cars'
  
}
