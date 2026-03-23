import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.module';
import { FormMaterialModule } from '../service/form-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SettingsComponent } from './settings.component';

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    FormMaterialModule,
    ReactiveFormsModule,
  ],
})
export class SettingsModule {}
