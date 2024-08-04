import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestaurantAddRequest } from '../models/RestaurantAddRequest';
import { Observable } from 'rxjs';
import { RestaurantResponse } from '../models/RestaurantResponse';


@Injectable({
  providedIn: 'root'
})
export class BackendService {
  restaurants : any

  constructor(private http: HttpClient) { }

  onboardRestaurant(restaurantAddRequest: RestaurantAddRequest){
    this.http.post('https://cab5-2401-4900-1c7e-3765-1373-113f-809b-db7d.ngrok-free.app/restro/create', restaurantAddRequest, {responseType:'text'})
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
  
 
  getAllRestaurants(): Observable<RestaurantResponse[]> {
    return this.http.get<RestaurantResponse[]>('https://cab5-2401-4900-1c7e-3765-1373-113f-809b-db7d.ngrok-free.app/restro/getAll', {
      responseType: 'json',
      headers: new HttpHeaders({
        'ngrok-skip-browser-warning': 'true',
      }),
    });
  }
}
