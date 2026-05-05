import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DxDataGridModule, DxButtonModule } from 'devextreme-angular';
import { DxChartModule } from 'devextreme-angular';
import { LoginComponent } from './login/login.component';
import { LoginModule } from './login/login.module';
import { InstanceService } from './pages/service/instance.service';
import { FormMaterialModule } from './core/form-material.module';
import { CommonModule } from '@angular/common';
import { DxTemplateModule } from 'devextreme-angular/core';
import { MatIconModule } from '@angular/material/icon';
import { AuthInterceptor } from './core/auth.interceptor';
import { ConsumerPortalInterceptor } from './consumer-portal/consumer-portal.interceptor';

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
    DxTemplateModule,
    DxDataGridModule,
    DxButtonModule,
    DxChartModule,
    LoginModule,
    FormMaterialModule,
    CommonModule,
    MatIconModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    InstanceService,
    { provide: LOCALE_ID, useValue: 'en-IN' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ConsumerPortalInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
