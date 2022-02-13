import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnotazioneRoutingModule } from './annotazione-routing.module';
import { AnnotazioneComponent } from './annotazione.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AnnotazioneComponent
  ],
  imports: [IonicModule, FormsModule, ReactiveFormsModule,
    CommonModule,
    AnnotazioneRoutingModule
  ],
  exports: [
    AnnotazioneComponent
  ]
})
export class AnnotazioneModule { }
