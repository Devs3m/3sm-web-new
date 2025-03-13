import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormMaterialModule } from '../core/form-material.module';
import { DxButtonModule, DxChartModule, DxDataGridModule } from 'devextreme-angular';




@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    LoginRoutingModule,
    HttpClientModule,
    FormMaterialModule,
    DxDataGridModule,
    DxButtonModule,
    DxChartModule,
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
