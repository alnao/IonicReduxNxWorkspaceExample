import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnotazioniRoutingModule } from './annotazioni-routing.module';
import { AnnotazioniComponent } from './annotazioni.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [
    AnnotazioniComponent
  ],
  imports: [IonicModule,
    CommonModule,
    AnnotazioniRoutingModule
  ],
  exports: [
    AnnotazioniComponent
  ]
})
export class AnnotazioniModule { }
