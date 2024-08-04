import { Component, OnInit } from '@angular/core';
import { RestaurantResponse } from 'src/app/models/RestaurantResponse';

import { BackendService } from 'src/app/services/backend-service.service';


@Component({
  selector: 'app-show-restaurant',
  templateUrl: './show-restaurant.component.html',
  styleUrls: ['./show-restaurant.component.scss']
})
export class ShowRestaurantComponent implements OnInit {
  restaurants: RestaurantResponse[] = [];

  constructor(private backend: BackendService) { }

  ngOnInit(): void {
    this.loadRestaurants();
}

loadRestaurants(): void {
  this.backend.getAllRestaurants().subscribe({
    next: (response: RestaurantResponse[]) => {
      this.restaurants = response;
      console.log(this.restaurants);
    },
    error: (err: any) => {
      console.error(err);
    }
    });
  }
}
