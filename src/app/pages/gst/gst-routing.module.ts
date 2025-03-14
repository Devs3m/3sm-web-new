import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GstComponent } from './gst.component';

const routes: Routes = [
  
  { path: '', component: GstComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GstRoutingModule { }