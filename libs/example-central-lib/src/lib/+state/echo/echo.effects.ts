import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as EchoFeature from './echo.reducer';
import * as EchoActions from './echo.actions';

@Injectable()
export class EchoEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EchoActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return EchoActions.loadEchoSuccess({ echo: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return EchoActions.loadEchoFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) {}
}
