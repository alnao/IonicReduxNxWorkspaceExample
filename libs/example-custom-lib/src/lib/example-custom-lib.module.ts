import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EchoComponentComponent } from './echo-component/echo-component.component';
import { ExampleCentralLibModule } from '@frontend/example-central-lib';
//import { ExampleCustomLibModule } from '@frontend/example-custom-lib';

@NgModule({
  imports: [CommonModule/*,ExampleCentralLibModule*/
  ],
  declarations: [EchoComponentComponent],
  exports: [
    EchoComponentComponent,
  ]
})
export class ExampleCustomLibModule {}
