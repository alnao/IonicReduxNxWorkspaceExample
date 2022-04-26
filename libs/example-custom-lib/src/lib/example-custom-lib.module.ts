import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EchoComponentComponent } from './echo-component/echo-component.component';
import { ExampleCentralLibModule } from '@frontend/example-central-lib';
import { SpinnerComponent } from './spinner/spinner.component';
//import { ExampleCustomLibModule } from '@frontend/example-custom-lib';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [CommonModule,IonicModule /*,ExampleCentralLibModule*/
  ],
  declarations: [EchoComponentComponent, SpinnerComponent],
  exports: [
    EchoComponentComponent,SpinnerComponent
  ]
})
export class ExampleCustomLibModule {}
