import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DigicardComponent } from './digicard.component';
import { VCardComponent } from '../vcard/v-card.component';
import { DigicardFormComponent } from './digicard-form/digicard-form.component';

const routes: Routes = [
  { path: '', component: DigicardComponent,
    children: [
      { path: '', redirectTo: 'digicard-form', pathMatch: 'full' },
      { path: 'digicard-form', component: DigicardFormComponent },
      { path: 'card', component: VCardComponent },
      { path: 'card/:id', component: VCardComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DigicardRoutingModule { }