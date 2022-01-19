import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnotazioneRoutingModule } from './annotazione-routing.module';
import { AnnotazioneComponent } from './annotazione.component';


@NgModule({
  declarations: [
    AnnotazioneComponent
  ],
  imports: [
    CommonModule,
    AnnotazioneRoutingModule
  ],
  exports: [
    AnnotazioneComponent
  ]
})
export class AnnotazioneModule { }
