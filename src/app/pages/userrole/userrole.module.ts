import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserroleRoutingModule } from './userrole-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormMaterialModule } from '../service/form-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxButtonModule, DxChartModule, DxDataGridModule } from 'devextreme-angular';
import { InstanceService } from '../service/instance.service';
import { UserroleComponent } from './userrole.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    UserroleComponent
  ],
  imports: [
    UserroleRoutingModule,
    HttpClientModule,
    FormMaterialModule,
    CommonModule,
    FormsModule,
    DxDataGridModule,
    DxButtonModule,
    DxChartModule,
    ReactiveFormsModule,
    SharedModule
  ],
    providers: [InstanceService]
})
export class UserroleModule { }
