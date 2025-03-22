import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormMaterialModule } from '../service/form-material.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxButtonModule, DxChartModule, DxDataGridModule } from 'devextreme-angular';
import { InstanceService } from '../service/instance.service';
import { DigicardComponent } from './digicard.component';
import { DigicardRoutingModule } from './digicard-routing.module';
import { CardComponent } from './card/card.component';
import { DigicardFormComponent } from './digicard-form/digicard-form.component';

@NgModule({
  declarations: [
    DigicardComponent,
    CardComponent,
    DigicardFormComponent
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
  exports: [DigicardComponent] ,
    providers: [InstanceService],
    bootstrap: [DigicardComponent]
})
export class DigicardModule { }
