import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailFormComponent } from './component/detail-form/detail-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DetailFormComponent
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
