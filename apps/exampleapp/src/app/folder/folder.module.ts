import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExampleCentralLibModule } from '@frontend/example-central-lib';
import { ExampleCustomLibModule } from '@frontend/example-custom-lib';


import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { AnnotazioniModule } from '../annotazioni/annotazioni.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, IonicModule, FolderPageRoutingModule,
    //StoreModule.forRoot({}),
    AnnotazioniModule,
    ExampleCentralLibModule,ExampleCustomLibModule],
  declarations: [FolderPage],
})
export class FolderPageModule {}
