import { Injectable } from "@angular/core";
import { Car } from "../models/Car";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class CarsService {

    private carsUrl = 'assets/api/cars.json';

    constructor(private httpClient: HttpClient) {
    }


    getCars(): Observable<Car[]> {
        let cars = this.httpClient.get<Car[]>(this.carsUrl)
        .pipe(catchError(this.handleError));
        return cars;
    }


    private handleError(error: HttpErrorResponse) {
       
        let errMessage: string;

        if(error instanceof ErrorEvent){
            errMessage = `An error is ${error}`;
        }
        else {
            errMessage = `Return code is ${error.status}`;
        }

        return throwError(() => errMessage);
    }
}