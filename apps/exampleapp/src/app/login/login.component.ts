import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'libs/example-central-lib/src/lib/services/auth.service';

@Component({
  selector: 'frontend-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    credentials = {
      email: 'alnao@alnao.it',
      pw: 'bello'
    };
   
    constructor(private auth: AuthService,private router: Router,private alertCtrl: AlertController) {}
   
    ngOnInit() {}
   
    login() {
      this.auth.login(this.credentials).subscribe(async res => {
        if (res) {
          this.router.navigateByUrl('/home');
        } else {
          const alert = await this.alertCtrl.create({
            header: 'Login Failed',
            message: 'Wrong credentials.',
            buttons: ['OK']
          });
          await alert.present();
        }
      });
    }
   
  }