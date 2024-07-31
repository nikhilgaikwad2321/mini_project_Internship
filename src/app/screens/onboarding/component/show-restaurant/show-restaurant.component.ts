import { Component, OnInit } from '@angular/core';
import { RestaurantShowRequest } from 'src/app/models/restaurant-show-request.model';
import { BackendService } from 'src/app/services/backend-service.service';


@Component({
  selector: 'app-show-restaurant',
  templateUrl: './show-restaurant.component.html',
  styleUrls: ['./show-restaurant.component.scss']
})
export class ShowRestaurantComponent implements OnInit {
  restaurants: RestaurantShowRequest[] = [];

  constructor(private backend: BackendService) { }

  ngOnInit(): void {
    this.loadRestaurants();
}
loadRestaurants(): void {
  this.backend.getAllRestaurants()
}
}