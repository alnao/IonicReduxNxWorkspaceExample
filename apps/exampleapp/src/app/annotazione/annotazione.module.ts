import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnotazioneRoutingModule } from './annotazione-routing.module';
import { AnnotazioneComponent } from './annotazione.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    AnnotazioneComponent
  ],
  imports: [IonicModule,
    CommonModule,
    AnnotazioneRoutingModule
  ],
  exports: [
    AnnotazioneComponent
  ]
})
export class AnnotazioneModule { }
