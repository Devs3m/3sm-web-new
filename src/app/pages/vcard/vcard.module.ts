import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { VideoSafeUrlPipe } from '../digicard/card/video-safe-url.pipe';
import { VCardComponent } from './v-card.component';

@NgModule({
  declarations: [VCardComponent, VideoSafeUrlPipe],
  imports: [CommonModule, HttpClientModule, RouterModule],
  exports: [VCardComponent]
})
export class VcardModule {}

