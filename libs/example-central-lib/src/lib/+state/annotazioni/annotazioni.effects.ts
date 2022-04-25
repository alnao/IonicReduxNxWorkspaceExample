import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType, Effect } from "@ngrx/effects";

import * as AnnotazioniFeature from "./annotazioni.reducer";
import * as AnnotazioniActions from "./annotazioni.actions";
import { AnnotazioniService } from "../../services/annotazioni.service";

import { fetch } from "@nrwl/angular";
import { State, Store } from "@ngrx/store";
import { map } from 'rxjs/operators' //https://www.tektutorialshub.com/angular/angular-observable-map-operator/


@Injectable()
export class AnnotazioniEffects {
  constructor(private actions$: Actions, private service: AnnotazioniService) {}

  //@Effect() //https://www.codemag.com/Article/1811061/Angular-and-the-Store
  load$ = createEffect(() =>
    this.actions$.pipe (
      ofType(AnnotazioniActions.loadAnnotazioniInit),
      fetch({ 
        run:(action) => this.service.get()
          .pipe(map((response) => AnnotazioniActions.loadAnnotazioniSuccess({annotazioni:response}) )
          //.then(res => AnnotazioniActions.loadAnnotazioniSuccess({annotazioni:JSON.parse(res.data)}) )) 
        )
      ,onError: (action, error) => 
          AnnotazioniActions.loadAnnotazioniFailure({ error })
      })
  ));
/*
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AnnotazioniActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return AnnotazioniActions.loadAnnotazioniSuccess({ annotazioni: [] });
        },

        onError: (action, error) => {
          console.error("Error", error);
          return AnnotazioniActions.loadAnnotazioniFailure({ error });
        },
      })
    )
  );
     
  constructor(private actions$: Actions) {}
*/
}
