import { Component, OnDestroy, OnInit } from '@angular/core';
import { Car } from '../../models/Car';
import { YesOrNoPipe } from '../../shared/yes-or-no.pipe';
import { CarsService } from '../../shared/cars.service';
import { SharedModule } from '../../shared/shared.module';
import { Observable, Observer, Subscriber, Subscription } from 'rxjs';


@Component({
  selector: 'cars-list',
  standalone: true,
  imports: [
    SharedModule,
    YesOrNoPipe,
  ],
  templateUrl: './cars-list.component.html',
  styleUrl: './cars-list.component.css'
})

export class CarsListComponent implements OnInit, OnDestroy {

  cars: Car[];
  filteredCars: Car[];
  private _carsService: Observable<Car[]>;

  errorMessage: string;
  sub!: Subscription;

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
    this.sub = this._carsService.subscribe({
      next: myCars => {
        this.cars = myCars;
        this.filteredCars = this.cars;
      },
      error: err => {
        this.errorMessage = err
        console.log(this.errorMessage);
      }
    });
    console.log(this.cars);
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


  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
