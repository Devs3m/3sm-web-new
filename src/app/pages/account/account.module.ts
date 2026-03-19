import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormMaterialModule } from '../service/form-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxButtonModule, DxChartModule, DxDataGridModule } from 'devextreme-angular';
import { InstanceService } from '../service/instance.service';
import { AccountComponent } from './account.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    AccountRoutingModule,
    HttpClientModule,
    FormMaterialModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DxDataGridModule,
    DxButtonModule,
    DxChartModule,
    SharedModule
  ],
  providers: [InstanceService]
})
export class AccountModule { }
