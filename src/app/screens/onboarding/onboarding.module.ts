import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailFormComponent } from './component/detail-form/detail-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ShowRestaurantComponent } from './component/show-restaurant/show-restaurant.component';
import { OnboardingRoutingModule } from './onboarding-routing.module';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';


@NgModule({
  declarations: [
    DetailFormComponent,
    ShowRestaurantComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    OnboardingRoutingModule
  ],
  exports:[
    DetailFormComponent
  ]
})
export class OnboardingModule { }
