import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailFormComponent } from './component/detail-form/detail-form.component';

const routes: Routes = [
  { path: 'detailform', component: DetailFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardingRoutingModule { }
