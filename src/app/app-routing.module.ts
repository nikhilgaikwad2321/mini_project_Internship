import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailFormComponent } from './screens/onboarding/component/detail-form/detail-form.component';
import { HomeComponent } from './components/home/home.component';
import { ShowRestaurantComponent } from './screens/onboarding/component/show-restaurant/show-restaurant.component';


const routes: Routes = [
  { path:'home', 
    component: HomeComponent
  },
  { path:'onboarding/details-form', 
    component:DetailFormComponent
  },
  {
    path:'onboarding/show-restaurants',
    component:ShowRestaurantComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
