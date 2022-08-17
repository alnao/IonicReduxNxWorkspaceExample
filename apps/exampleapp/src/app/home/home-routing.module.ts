import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnnotazioniComponent } from '../annotazioni/annotazioni.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },{
    path: 'annotazioni',
    component : AnnotazioniComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
