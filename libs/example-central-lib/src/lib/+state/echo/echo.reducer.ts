import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as EchoActions from './echo.actions';
import { EchoEntity } from './echo.models';

export const ECHO_FEATURE_KEY = 'echo';

export interface State extends EntityState<EchoEntity> {
  selectedId?: string | number; // which Echo record has been selected
  loaded: boolean; // has the Echo list been loaded
  error?: string | null; // last known error (if any)
}

export interface EchoPartialState {
  readonly [ECHO_FEATURE_KEY]: State;
}

export const echoAdapter: EntityAdapter<EchoEntity> =
  createEntityAdapter<EchoEntity>();

export const initialState: State = echoAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const echoReducer = createReducer(
  initialState,
  on(EchoActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(EchoActions.loadEchoSuccess, (state, { echo }) =>
    echoAdapter.setAll(echo, { ...state, loaded: true })
  ),
  on(EchoActions.loadEchoFailure, (state, { error }) => ({ ...state, error }))
);

export function reducer(state: State | undefined, action: Action) {
  return echoReducer(state, action);
}
