import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AnnotazioneDettaglioComponent } from './annotazione-dettaglio/annotazione-dettaglio.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
  },
  {
    path: 'annotazioni',
    loadChildren: () =>
      import('./annotazioni/annotazioni.module').then((m) => m.AnnotazioniModule),
  },
  {
    path: 'annotazione-dettaglio/:id',
    component : AnnotazioneDettaglioComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
