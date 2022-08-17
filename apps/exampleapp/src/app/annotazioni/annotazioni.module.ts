import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnotazioniRoutingModule } from './annotazioni-routing.module';
import { AnnotazioniComponent } from './annotazioni.component';
import { IonicModule } from '@ionic/angular';import { AnnotazioneModule } from '../annotazione/annotazione.module';

import { ExampleCustomLibModule } from '@frontend/example-custom-lib';


@NgModule({
  declarations: [
    AnnotazioniComponent
  ],
  imports: [IonicModule,
    CommonModule,
    AnnotazioniRoutingModule,
    ExampleCustomLibModule,
  ],
  exports: [
    AnnotazioniComponent
  ]
})
export class AnnotazioniModule { }
