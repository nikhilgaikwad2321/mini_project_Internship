import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailFormComponent } from './component/detail-form/detail-form.component';
import { ShowRestaurantComponent } from './component/show-restaurant/show-restaurant.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [
  { path: 'detailform', component: DetailFormComponent },
  { path: 'showRestaurant', component: ShowRestaurantComponent },
  { path:'login',component:LoginComponent},
  { path:'signup',component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardingRoutingModule { }
