import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnotazioniRoutingModule } from './annotazioni-routing.module';
import { AnnotazioniComponent } from './annotazioni.component';
import { IonicModule } from '@ionic/angular';import { AnnotazioneModule } from '../annotazione/annotazione.module';

import { ExampleCustomLibModule } from '@frontend/example-custom-lib';
import { SelezioneMultiplaComponent } from '../selezione-multipla/selezione-multipla.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AnnotazioniComponent,SelezioneMultiplaComponent
  ],
  imports: [IonicModule,
    CommonModule,FormsModule,
    AnnotazioniRoutingModule,
    ExampleCustomLibModule,
    
  ],
  exports: [
    AnnotazioniComponent
  ]
})
export class AnnotazioniModule { }
