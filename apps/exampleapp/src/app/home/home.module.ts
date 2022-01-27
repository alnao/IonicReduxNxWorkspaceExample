//import { EchoComponentComponent } from '@frontend/example-custom-lib/';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { ExampleCentralLibModule } from '@frontend/example-central-lib';
import { ExampleCustomLibModule } from '@frontend/example-custom-lib';

import { HomePageRoutingModule } from './home-routing.module';
import { AnnotazioniModule } from '../annotazioni/annotazioni.module';
import { AnnotazioneModule } from '../annotazione/annotazione.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule,
    HomePageRoutingModule,
    ExampleCentralLibModule,ExampleCustomLibModule,
    AnnotazioniModule,AnnotazioneModule
  ],
  declarations: [HomePage],
})
export class HomePageModule {}
