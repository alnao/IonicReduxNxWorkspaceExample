import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { fetch } from "@nrwl/angular";

import * as AuthFeature from "./auth.reducer";
import * as AuthActions from "./auth.actions";
import { AuthEntity } from "./auth.models";

@Injectable()
export class AuthEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.loadAuthInit),
      fetch({
        run: (action) => {
          //TODO chiamata alla API che ritorna se auth, qui esempio con PWD statica
          if (action.element.username==='alnao@alnao.it' && action.element.password==='bello'){
            let authel : AuthEntity = {id:0,password:'',
              username : action.element.username,
              towenJwt : 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1Njc2NjU3MDYsImV4cCI6MTU5OTIwMTcwNiwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoiMTIzNDUiLCJmaXJzdF9uYW1lIjoiU2ltb24iLCJsYXN0X25hbWUiOiJHcmltbSIsImVtYWlsIjoic2FpbW9uQGRldmRhY3RpYy5jb20ifQ.4LZTaUxsX2oXpWN6nrSScFXeBNZVEyuPxcOkbbDVZ5U'
            };
            let auth: AuthEntity[]=[];
            auth[0]=authel
            return AuthActions.loadAuthSuccess({ auth });  
          }
          console.error("Error", "Username o password errate");
          return AuthActions.loadAuthFailure({ error:"Username o password errate" });
        },

        onError: (action, error) => {
          console.error("Error", error);
          return AuthActions.loadAuthFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) {}
}
