import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnotazioneRoutingModule } from './annotazione-routing.module';
import { AnnotazioneComponent } from './annotazione.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExampleCustomLibModule } from '@frontend/example-custom-lib';


@NgModule({
  declarations: [
    AnnotazioneComponent
  ],
  imports: [IonicModule, FormsModule, ReactiveFormsModule,
    CommonModule,
    AnnotazioneRoutingModule,
    ExampleCustomLibModule,
  ],
  exports: [
    AnnotazioneComponent
  ]
})
export class AnnotazioneModule { }
