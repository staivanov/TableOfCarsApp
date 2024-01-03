import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CarsService } from './cars.service';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,

  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CarsService
  ]
})
export class SharedModule { }
