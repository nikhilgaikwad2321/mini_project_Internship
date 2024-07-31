import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailFormComponent } from './component/detail-form/detail-form.component';
import { ShowRestaurantComponent } from './component/show-restaurant/show-restaurant.component';

const routes: Routes = [
  { path: 'detailform', component: DetailFormComponent },
  { path: 'show', component: ShowRestaurantComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardingRoutingModule { }
