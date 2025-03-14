import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DigicardRoutingModule } from './digicard-routin.module';
import { HttpClientModule } from '@angular/common/http';
import { FormMaterialModule } from '../service/form-material.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxButtonModule, DxChartModule, DxDataGridModule } from 'devextreme-angular';
import { InstanceService } from '../service/instance.service';
import { DigicardComponent } from './digicard.component';

@NgModule({
  declarations: [
    DigicardComponent
  ],
  imports: [
    DigicardRoutingModule,
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
    bootstrap: [DigicardComponent]
})
export class DigicardModule { }
