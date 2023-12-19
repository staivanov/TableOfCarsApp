import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/Car';
import { YesOrNoPipe } from '../../shared/yes-or-no.pipe';
import { CarsService } from '../../shared/cars.service';
import { SharedModule } from '../../shared/shared.module';


@Component({
  selector: 'app-cars-list',
  standalone: true,
  imports: [
    SharedModule,
    YesOrNoPipe,
  ],
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.css'
})

export class CarsListComponent implements OnInit {

  cars: Car[];
  filteredCars: Car[];
  private _carsService: Car[];

  private _filterBy: string;
  isPriceHidden: boolean = true;


  get filterBy(): string {
    return this._filterBy;
  }

  set filterBy(value: string) {
    this._filterBy = value;
    this.filteredCars = this.executeFilter(value);
  }


  constructor(private carsService: CarsService) {
    this._carsService = this.carsService.getCars();
  }


  ngOnInit(): void {
    this.cars = this._carsService;
    this.filteredCars = this.cars;
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
