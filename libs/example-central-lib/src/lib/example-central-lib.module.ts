import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromEcho from './+state/echo/echo.reducer';
import { EchoEffects } from './+state/echo/echo.effects';
//import { ExampleCentralLibModule } from '@frontend/example-central-lib';
import { ExampleCustomLibModule } from '@frontend/example-custom-lib';


@NgModule({
  imports: [/*ExampleCustomLibModule,*/
    CommonModule,
    StoreModule.forFeature(fromEcho.ECHO_FEATURE_KEY, fromEcho.reducer),
    EffectsModule.forFeature([EchoEffects]),
  ],
})
export class ExampleCentralLibModule {}
