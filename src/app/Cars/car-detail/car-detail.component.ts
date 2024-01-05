import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'car-detail',
  standalone: true,
  imports: [],
  templateUrl: './car-detail.component.html',
  styleUrl: './car-detail.component.css'
})

export class CarDetailComponent implements OnInit{


  pageTitle: string = "Car detail";

  constructor(private router: ActivatedRoute) {

  }

  ngOnInit(): void {
    const id = Number(this.router.snapshot.paramMap.get('id'));
    this.pageTitle += ` ${id}`;

  }




}
