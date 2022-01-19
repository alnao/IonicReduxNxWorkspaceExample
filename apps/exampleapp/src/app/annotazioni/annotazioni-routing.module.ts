import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnotazioniComponent } from './annotazioni.component';
import { AnnotazioniModule } from './annotazioni.module';

const routes: Routes = [
  {
    path: '',
    component: AnnotazioniComponent,
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnnotazioniRoutingModule { }
