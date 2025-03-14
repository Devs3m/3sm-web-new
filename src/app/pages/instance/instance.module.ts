import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstanceRoutingModule } from './instance-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormMaterialModule } from '../service/form-material.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxButtonModule, DxChartModule, DxDataGridModule } from 'devextreme-angular';
import { InstanceService } from '../service/instance.service';
import { InstanceComponent } from './instance.component';

@NgModule({
  declarations: [
    InstanceComponent
  ],
  imports: [
    InstanceRoutingModule,
    HttpClientModule,
    FormMaterialModule,
    HighchartsChartModule,
    CommonModule,
    FormsModule,
    DxDataGridModule,
    DxButtonModule,
    DxChartModule,
    ReactiveFormsModule
  ],
    providers: [InstanceService],
    bootstrap: [InstanceComponent]
})
export class InstanceModule { }
