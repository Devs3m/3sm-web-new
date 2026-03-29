import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormMaterialModule } from '../service/form-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxButtonModule, DxChartModule, DxDataGridModule } from 'devextreme-angular';
import { InstanceService } from '../service/instance.service';
import { DigicardComponent } from './digicard.component';
import { DigicardRoutingModule } from './digicard-routing.module';
import { DigicardFormComponent } from './digicard-form/digicard-form.component';
import { VcardModule } from '../vcard/vcard.module';

@NgModule({
  declarations: [
    DigicardComponent,
    DigicardFormComponent,
  ],
  imports: [
    DigicardRoutingModule,
    HttpClientModule,
    FormMaterialModule,
    CommonModule,
    FormsModule,
    VcardModule,
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
