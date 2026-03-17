import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstanceRoutingModule } from './instance-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormMaterialModule } from '../service/form-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxButtonModule, DxChartModule, DxDataGridModule } from 'devextreme-angular';
import { InstanceService } from '../service/instance.service';
import { InstanceComponent } from './instance.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    InstanceComponent
  ],
  imports: [
    InstanceRoutingModule,
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
    providers: [InstanceService],
    bootstrap: [InstanceComponent]
})
export class InstanceModule { }
