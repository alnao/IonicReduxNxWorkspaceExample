import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";
import { select, Store } from '@ngrx/store';
import { isUserLogged } from "@frontend/example-central-lib";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
    constructor(private router: Router, private store: Store,
       private alertCtrl: AlertController) { }

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
      let isLogged$ = this.store.pipe(select(isUserLogged));
      return isLogged$.pipe( map( (value) => {
        if (!value){
          this.alertCtrl.create({
            header: 'Unauthorized',
            message: 'You are not allowed to access that page.',
            buttons: ['OK']
            }).then(alert => alert.present());
          this.router.navigateByUrl('/login');
        }
        return value;
      }));
/* old verSION con ionic-store
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
      )*/
    }
  }