import { HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { BehaviorSubject, from, Observable, of} from 'rxjs';
import { catchError, map, switchMap, take } from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';
import { Storage } from '@ionic/storage-angular';
import { getJwtToken } from '../+state/auth/auth.selectors';
import { select, Store } from '@ngrx/store';

const helper=new JwtHelperService();
const TOKEN_KEY='jwt-token';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: Observable<any>;
  private userData = new BehaviorSubject(null);
 
  constructor(private storage: Storage, private http: HttpClient, 
  private plt: Platform, private router: Router) { 
    this.loadStoredToken();  
    //this.user=null;
  }
 
  loadStoredToken() {
    let platformObs = from(this.plt.ready());
  
    this.user = platformObs.pipe(
      switchMap(() => {
        return from(this.storage.get(TOKEN_KEY));
      }),
      map(token => {
        if (token) {
          let decoded = helper.decodeToken(""+token); 
          this.userData.next(decoded);
          return true;
        } else {
          return null;
        }
      })
    );
  }
 
  login(credentials: {email: string, pw: string }) {
    // TODO
    if (credentials.email != 'alnao@alnao.it' || credentials.pw != 'bello') {
      console.log("Credenziali errate");
      return of(null);
    }
    console.log("Credenziali giuste");
    return this.http.get('https://randomuser.me/api/').pipe(
      take(1),
      map(res => {
        // Extract the JWT, here we just fake it
        return `nonpiuusato_guardareeffects`;
      }),
      switchMap(token => {
        let decoded = helper.decodeToken(token);
        this.userData.next(decoded);
        let storageObs = from(this.storage.set(TOKEN_KEY, token));
        console.log("Credenziali salvate token",this.userData.getValue());
        return storageObs;
      })
    );
  }
 
  getUser() {
    console.log("getUser: ",this.userData.getValue())
    return this.userData.getValue();
  }
 
  logout() {
    console.log("Logout");
    this.storage.remove(TOKEN_KEY).then(() => {
      this.router.navigateByUrl('/login');
      this.userData.next(null);
    });
  }
 
}


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private store: Store) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add auth header with jwt if user is logged in and request is to api url
    const token$= this.store.pipe(select(getJwtToken ) );
    let token = null;
    token$.subscribe( v => token=v ); 
    if (token && request.method!=='OPTION') {
        request = request.clone({ 
            setHeaders: { //...request.headers,
                Authorization: `Bearer ${token}`
            }
        });
    }
    return next.handle(request)/*.pipe(
      catchError((err,el) => {
        if (err instanceof HttpErrorResponse) {
          console.log(err);
          if (err.status === 401) {
         }
        }
        return el;
      }) 
    )*/;
  }
}