import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { AuthService } from "libs/example-central-lib/src/lib/services/auth.service";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
    constructor(private router: Router, private auth: AuthService
      , private alertCtrl: AlertController) { }
    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
      console.log("canActivate" , this.auth.user)
      return this.auth.user?.pipe(
        take(1),
        map(user => {
        if (!user) {
          this.alertCtrl.create({
          header: 'Unauthorized',
          message: 'You are not allowed to access that page.',
          buttons: ['OK']
          }).then(alert => alert.present());
          this.router.navigateByUrl('/login');
          return false;
        } else {
          return true;
        }
        })
      )
    }
  }