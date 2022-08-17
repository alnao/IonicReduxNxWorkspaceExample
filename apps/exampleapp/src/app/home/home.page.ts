//import { EchoComponentComponent } from '@frontend/example-custom-lib/EchoComponentComponent';
//import { EchoComponentComponent } from '@frontend/example-custom-lib';

import { Component } from '@angular/core';
import { AuthService } from 'libs/example-central-lib/src/lib/services/auth.service';

@Component({
  selector: 'frontend-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //EchoComponentComponent
  constructor(private auth: AuthService) {}
  logout(){  console.log("Logout"); this.auth.logout();}
}
