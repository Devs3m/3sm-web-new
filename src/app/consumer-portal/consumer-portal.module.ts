import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ConsumerPortalRoutingModule } from './consumer-portal-routing.module';
import { ConsumerPortalComponent } from './consumer-portal.component';

@NgModule({
  declarations: [ConsumerPortalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ConsumerPortalRoutingModule
  ],
  providers: []
})
export class ConsumerPortalModule {}
