import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestaurantAddRequest } from 'src/app/models/RestaurantAddRequest';
import { BackendService } from 'src/app/services/backend-service.service';

@Component({
  selector: 'app-detail-form',
  templateUrl: './detail-form.component.html',
  styleUrls: ['./detail-form.component.scss']
})
export class DetailFormComponent {
  restaurantAddRequest: RestaurantAddRequest = new RestaurantAddRequest();
  restaurantDetails: FormGroup;

  constructor(private fb: FormBuilder,private backend: BackendService) {
    this.restaurantDetails = this.fb.group({
      name: ['', Validators.required],
      owner: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
      zipcode: ['', [Validators.required,]],
      phone: ['', [Validators.required,]],
      email: ['', [Validators.required,]],
      type: ['', Validators.required]
    });
  }

  handleSubmit() {
    if (this.restaurantDetails.valid) {
      console.log(this.restaurantDetails.value);
      this.createRequest(this.restaurantDetails);
      alert('Restaurant details submitted successfully');
      this.restaurantDetails.reset();
    } else {
      alert('Please fill out the form correctly');
    }
  }

  createRequest(details: FormGroup) {
    this.restaurantAddRequest.name = details.value['name'];
    this.restaurantAddRequest.owner = details.value['owner'];
    this.restaurantAddRequest.street = details.value['street'];
    this.restaurantAddRequest.city = details.value['city'];
    this.restaurantAddRequest.zipcode = details.value['zipcode'];
    this.restaurantAddRequest.type = details.value['type'];
    this.restaurantAddRequest.contact = details.value['phone'];
    this.restaurantAddRequest.email=details.value['email'];
    this.processRequest(this.restaurantAddRequest);

  }

  processRequest(restaurantAddRequestData: RestaurantAddRequest){
 
   const message =  this.backend.onboardRestaurant(restaurantAddRequestData);
  }
}
