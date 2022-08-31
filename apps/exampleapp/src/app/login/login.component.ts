import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { loadAuthFailure, loadAuthInit, loadAuthSuccess } from '@frontend/example-central-lib';
import { AlertController } from '@ionic/angular';
import { ofType } from '@ngrx/effects';
import { ActionsSubject, Store } from '@ngrx/store';
import { AuthService } from 'libs/example-central-lib/src/lib/services/auth.service';
import { skip } from 'rxjs/operators';

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
   
    constructor(private store: Store,private actionListener$: ActionsSubject,
      private router: Router,private alertCtrl: AlertController) {}
   
    ngOnInit() {}
   
    login() {
      this.store.dispatch( loadAuthInit(
        {id:0,element:{id:0,towenJwt:null,username:this.credentials.email,password:this.credentials.pw}}) 
      );
      //substribe to success or error message
      this.actionListener$.pipe(skip(1) // optional: skips initial logging done by ngrx
      ).pipe(ofType(loadAuthSuccess),
        ).subscribe((action) => {
          console.log("success");
          this.router.navigateByUrl('/home');
        });
      this.actionListener$.pipe(skip(1) // optional: skips initial logging done by ngrx
      ).pipe(ofType(loadAuthFailure),
        ).subscribe((action) => {
          console.log("Error: ",action);
          this.alertCtrl.create({
            header: 'Unauthorized',
            message: 'Error '+ action.error,
            buttons: ['OK']
            }).then(alert => alert.present());
        });
      /* old verSION con ionic-store
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
      */
    }
   
  }