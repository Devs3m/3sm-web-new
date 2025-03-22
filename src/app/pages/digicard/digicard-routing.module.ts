import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigicardComponent } from './digicard.component';
import { CardComponent } from './card/card.component';
import { DigicardFormComponent } from './digicard-form/digicard-form.component';

const routes: Routes = [
  
  { path: '', component: DigicardComponent,
    children: [
      {
        path: '',
        redirectTo: 'digicard-form',
        pathMatch: 'full'
      },
      {
        path: 'digicard-form',
        component:DigicardFormComponent
      },
      {
        path: 'card',
        component:CardComponent
      }
    ]
   }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DigicardRoutingModule { }