import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { getUtente, getUtenteName, isUserEnabledRole } from '@frontend/example-central-lib';
import { select, Store } from '@ngrx/store';
import { AuthService } from 'libs/example-central-lib/src/lib/services/auth.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'frontend-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  userName : string ="";
  constructor(private auth: AuthService,private store: Store) {}

  logout(){  console.log("Logout"); this.auth.logout();}

  ngOnInit(): void {
    /* old version
    let utente = this.store.pipe(select(getUtente)).subscribe( ut => { 
      const jwtService = new JwtHelperService();
      const ruoli  : any[]= jwtService.decodeToken(ut.towenJwt)['role'];
      //console.log(ruoli);
      if ((ruoli!==undefined ) && (ruoli.some( r => 'ANNOTAZIONI2'===(r.authority) ) ))
        this.visualizzaAnnotazioni=true;      
    } );
    */
    this.store.pipe(select(isUserEnabledRole,'ANNOTAZIONI')).subscribe(
      val => this.visualizzaAnnotazioni=val
    );
    this.store.pipe(select(getUtenteName)).subscribe(
      val => this.userName=val
    );
  }
  visualizzaAnnotazioni: boolean=false;
  
}
