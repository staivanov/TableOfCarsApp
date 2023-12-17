import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Car } from '../../models/Car';

@Component({
  selector: 'app-cars-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.css'
})
export class CarsListComponent {

  cars: Car[] =
    [
      {
       id: 1, 
       brand: 'Ford',
       model: 'Mondeo',
       year: new Date(2023),
       price: 30000,
       inStock: true
      },
      {
        id: 2, 
        brand: 'Ford',
        model: 'Focus',
        year: new Date(2004),
        price: 300,
        inStock: false
       },
       {
        id: 3, 
        brand: 'BMW',
        model: 'M3',
        year: new Date(2011),
        price: 15000,
        inStock: true
       },
       {
        id: 4, 
        brand: 'Audi',
        model: 'A6',
        year: new Date(2023),
        price: 65000,
        inStock: true
       }
    ];

}
