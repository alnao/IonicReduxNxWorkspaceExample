import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnnotazioniRoutingModule } from './annotazioni-routing.module';
import { AnnotazioniComponent } from './annotazioni.component';
import { IonicModule } from '@ionic/angular';

import { JwPaginationModule } from 'jw-angular-pagination';

@NgModule({
  declarations: [
    AnnotazioniComponent
  ],
  imports: [
    CommonModule,IonicModule,
    AnnotazioniRoutingModule,JwPaginationModule
  ],
  exports: [
    AnnotazioniComponent
  ]
})
export class AnnotazioniModule { }
