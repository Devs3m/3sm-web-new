import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsumerPortalComponent } from './consumer-portal.component';

const routes: Routes = [
  { path: '', component: ConsumerPortalComponent },
  { path: ':accountid/:instanceid', component: ConsumerPortalComponent },
  { path: ':token', component: ConsumerPortalComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsumerPortalRoutingModule {}
