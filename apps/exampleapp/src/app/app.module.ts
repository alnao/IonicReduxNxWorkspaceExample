import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AnnotazioniModule } from './annotazioni/annotazioni.module';
import { HttpClient } from '@angular/common/http';
import { ExampleCustomLibModule } from '@frontend/example-custom-lib';
import { ExampleCentralLibModule } from '@frontend/example-central-lib';
import { AnnotazioneDettaglioComponent } from './annotazione-dettaglio/annotazione-dettaglio.component';


@NgModule({
  declarations: [AppComponent, AnnotazioneDettaglioComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), 
    AppRoutingModule, AnnotazioniModule, 
    StoreModule.forRoot({}),
    EffectsModule.forRoot(),
    ExampleCustomLibModule,ExampleCentralLibModule,
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
  exports: [
    AnnotazioneDettaglioComponent
  ],
})
export class AppModule {}
