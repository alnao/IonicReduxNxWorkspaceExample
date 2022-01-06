import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import * as fromEcho from "./+state/echo/echo.reducer";
import { EchoEffects } from "./+state/echo/echo.effects";
//import { ExampleCentralLibModule } from '@frontend/example-central-lib';
import { ExampleCustomLibModule } from "@frontend/example-custom-lib";
import * as fromAnnotazioni from "./+state/annotazioni/annotazioni.reducer";
import { AnnotazioniEffects } from "./+state/annotazioni/annotazioni.effects";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule,
    /*ExampleCustomLibModule,*/ CommonModule,
    StoreModule.forFeature(fromEcho.ECHO_FEATURE_KEY, fromEcho.reducer),
    EffectsModule.forFeature([EchoEffects]),
    StoreModule.forFeature(
      fromAnnotazioni.ANNOTAZIONI_FEATURE_KEY,
      fromAnnotazioni.annotazioniReducerMethod
    ),
    EffectsModule.forFeature([AnnotazioniEffects]),
  ],
})
export class ExampleCentralLibModule {}
