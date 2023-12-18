import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Car } from '../../models/Car';
import { FormsModule } from '@angular/forms';
import { YesOrNoPipe } from '../../shared/yes-or-no.pipe';


@Component({
  selector: 'app-cars-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    YesOrNoPipe,
  ],
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

  filteredCars: Car[];

  private _filterBy: string;
  isPriceHidden: boolean = true;

  get filterBy(): string {
    return this._filterBy;
  }

  set filterBy(value: string) {
    this._filterBy = value;
    this.filteredCars = this.executeFilter(value);
  }


  showPrice() {
    this.isPriceHidden = !this.isPriceHidden;
  }

  executeFilter(filteredBy: string): Car[] {
    filteredBy = filteredBy.toLowerCase();

    return this.cars.filter((car: Car) => 
      car.brand.toLowerCase().includes(filteredBy)
    );
  }
}
