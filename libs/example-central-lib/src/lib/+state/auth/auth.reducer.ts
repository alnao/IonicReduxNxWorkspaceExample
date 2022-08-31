import { createReducer, on, Action } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

import * as AuthActions from "./auth.actions";
import { AuthEntity } from "./auth.models";

export const AUTH_FEATURE_KEY = "auth";

export interface AuthState extends EntityState<AuthEntity> {
  selectedId?: string | number; // which Auth record has been selected
  loaded: boolean; // has the Auth list been loaded
  error?: string | null; // last known error (if any)
}

export interface AuthPartialState {
  readonly [AUTH_FEATURE_KEY]: AuthState;
}

export const authAdapter: EntityAdapter<AuthEntity> =
  createEntityAdapter<AuthEntity>();

export const authInitialState: AuthState = authAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const authReducer = createReducer(
  authInitialState,
  on(AuthActions.loadAuthInit, (state) => ({ ...state, loaded: false, error: null })),
  on(AuthActions.loadAuthSuccess, (state, { auth }) =>
    authAdapter.setAll(auth, { ...state, loaded: true })
  ),
  on(AuthActions.loadAuthFailure, (state, { error }) => ({ ...state, error }))
);

export function Authreducer(state: AuthState | undefined, action: Action) {
  return authReducer(state, action);
}
