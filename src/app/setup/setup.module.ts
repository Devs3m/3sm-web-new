import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SetupComponent } from './setup.component';
import { SetupRoutingModule } from './setup-routing.module';

@NgModule({
  declarations: [SetupComponent],
  imports: [CommonModule, FormsModule, HttpClientModule, SetupRoutingModule],
})
export class SetupModule {}
