import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { OfflineInstallerComponent } from './offline-installer.component';
import { OfflineInstallerRoutingModule } from './offline-installer-routing.module';

@NgModule({
  declarations: [OfflineInstallerComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    OfflineInstallerRoutingModule,
  ],
})
export class OfflineInstallerModule {}
