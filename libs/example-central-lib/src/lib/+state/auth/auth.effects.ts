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
              towenJwt : 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhbG5hbyIsInJvbGUiOlt7ImF1dGhvcml0eSI6IkFMTkFPIn0seyJhdXRob3JpdHkiOiJBTk5PVEFaSU9OSSJ9XSwiZXhwIjoyNjY0MzI1MDQwLCJpYXQiOjE2NjM5NjUwNDB9.2LEeBGlDaT_BfDHN4rpcepYWGSb-lxRClLiXNxKeMMXGl8tAMDETCJniOFx1X3RpbTK-2QFsFae78a-Lze7LFQ'
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
