import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestaurantAddRequest } from '../models/RestaurantAddRequest';
import { RestaurantShowRequest } from '../models/restaurant-show-request.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private apiUrl = 'https://your-api-url.com/restaurants'; 

  constructor(private http: HttpClient) { }

  onboardRestaurant(restaurantAddRequest: RestaurantAddRequest){
    this.http.post("/onboarding/show-restaurants", restaurantAddRequest, {responseType:'text'})
    .subscribe({
      next: (response)=>{
        console.log('response got from backend is : ', response)
        return `restaurant added successfully ${response}`;
      },
      error: (error)=>{
        console.log('error occured : ', error)
        return 'something is wrong in onboardrestuarant funcion of backend service'
      }
    });
  }
  getAllRestaurants(): Observable<RestaurantShowRequest[]> {
    return this.http.get<RestaurantShowRequest[]>(this.apiUrl);
  }

  }
