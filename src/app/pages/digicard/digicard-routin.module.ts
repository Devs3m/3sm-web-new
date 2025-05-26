import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigicardComponent } from './digicard.component';

const routes: Routes = [
  
  { path: '', component: DigicardComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DigicardRoutingModule { }