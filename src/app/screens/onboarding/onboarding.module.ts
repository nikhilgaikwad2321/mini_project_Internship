import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailFormComponent } from './component/detail-form/detail-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowRestaurantComponent } from './component/show-restaurant/show-restaurant.component';


@NgModule({
  declarations: [
    DetailFormComponent,
    ShowRestaurantComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    
  ],
  exports:[
    DetailFormComponent
  ]
})
export class OnboardingModule { }
