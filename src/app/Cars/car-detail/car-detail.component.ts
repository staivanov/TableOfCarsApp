import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'car-detail',
  standalone: true,
  imports: [],
  templateUrl: './car-detail.component.html',
  styleUrl: './car-detail.component.css'
})

export class CarDetailComponent implements OnInit{


  pageTitle: string = "Car detail";

  constructor() {

  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }




}
