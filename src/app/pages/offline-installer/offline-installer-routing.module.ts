import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfflineInstallerComponent } from './offline-installer.component';

const routes: Routes = [{ path: '', component: OfflineInstallerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OfflineInstallerRoutingModule {}
