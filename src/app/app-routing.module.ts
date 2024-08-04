import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path:'', 
    component: HomeComponent
  },
  { path: 'onboarding', loadChildren: () => import('./screens/onboarding/onboarding.module').then(m => m.OnboardingModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
