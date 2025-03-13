import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DxDataGridModule, DxButtonModule } from 'devextreme-angular';
import { DxChartModule } from 'devextreme-angular';
import { HighchartsChartModule } from 'highcharts-angular';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { InstanceService } from './pages/service/instance.service';
import { FormMaterialModule } from './core/form-material.module';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  { path: 'login', component: LoginComponent },

];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DxDataGridModule,
    DxButtonModule,
    DxChartModule,
    HighchartsChartModule,
    LoginModule,
    FormMaterialModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [InstanceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
