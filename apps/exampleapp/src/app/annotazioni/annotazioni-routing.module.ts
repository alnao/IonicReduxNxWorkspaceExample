import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnotazioneComponent } from '../annotazione/annotazione.component';
import { AnnotazioniComponent } from './annotazioni.component';

const routes: Routes = [{
    path: '',
    component: AnnotazioniComponent,
  }, ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnotazioniRoutingModule { }
