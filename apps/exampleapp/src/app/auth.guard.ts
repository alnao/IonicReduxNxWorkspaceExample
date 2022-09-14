import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";
import { select, Store } from '@ngrx/store';
import { getUtente, isUserLogged } from "@frontend/example-central-lib";
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
    constructor(private router: Router, private store: Store,
       private alertCtrl: AlertController) { }

    canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
      let utente$ = this.store.pipe(select(getUtente));
      return utente$.pipe( map( (ut) => {
        let utenteAutenticato: boolean = 
          (ut!== undefined && ut.towenJwt!==null && ut.towenJwt!=='');
        if (utenteAutenticato){
          const jwtService = new JwtHelperService();
          utenteAutenticato = !jwtService.isTokenExpired(ut.towenJwt);
          //console.log(!jwtService.isTokenExpired(ut.towenJwt));
        }
        if (!utenteAutenticato){ 
          this.alertCtrl.create({
            header: 'Unauthorized',
            message: 'You are not allowed to access that page.',
            buttons: ['OK']
            }).then(alert => alert.present());
          this.router.navigateByUrl('/login');
        }
        //console.log("utenteAutenticato" + utenteAutenticato);
        return utenteAutenticato;
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