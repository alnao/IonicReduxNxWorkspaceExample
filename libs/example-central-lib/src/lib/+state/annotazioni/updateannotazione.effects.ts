import { Injectable } from "@angular/core";
import { createEffect, Actions, ofType } from "@ngrx/effects";
import { fetch } from "@nrwl/angular";

import * as UpdateannotazioneFeature from "./updateannotazione.reducer";
import * as UpdateannotazioneActions from "./updateannotazione.actions";
import { AnnotazioniService } from "../../services/annotazioni.service";
import { map } from "rxjs/operators";

@Injectable()
export class UpdateannotazioneEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UpdateannotazioneActions.loadUpdateannotazioneInit),
      fetch({ 
        run:(action) => this.service.put(action.id,action.element).pipe(map((response) =>
          UpdateannotazioneActions.loadUpdateannotazioneSuccess({updateannotazione: [action.element]}) )
        )
      ,onError: (action, error) => 
        UpdateannotazioneActions.loadUpdateannotazioneFailure({ error })
      })
    )
  );

  constructor(private actions$: Actions, private service: AnnotazioniService) {}
}
