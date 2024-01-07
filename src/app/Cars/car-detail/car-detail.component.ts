import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'car-detail',
  standalone: true,
  imports: [],
  templateUrl: './car-detail.component.html',
  styleUrl: './car-detail.component.css'
})

export class CarDetailComponent implements OnInit {

  pageTitle: string = "Car detail";

  constructor(private route: ActivatedRoute,
    private router: Router) {
  }

  
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle += ` ${id}`;
  }


  onBack(): void {
    this.router.navigate(['/cars-list']);
  }
}
