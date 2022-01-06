import { createReducer, on, Action } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

import * as AnnotazioniActions from "./annotazioni.actions";
import { AnnotazioniEntity } from "./annotazioni.models";

export const ANNOTAZIONI_FEATURE_KEY = "annotazioni";

export interface AnnotazioniState extends EntityState<AnnotazioniEntity> {
  selectedId?: string | number; // which Annotazioni record has been selected
  loaded: boolean; // has the Annotazioni list been loaded
  error?: string | null; // last known error (if any)
}

export interface AnnotazioniPartialState {
  readonly [ANNOTAZIONI_FEATURE_KEY]: AnnotazioniState;
}

export const annotazioniAdapter: EntityAdapter<AnnotazioniEntity> =
  createEntityAdapter<AnnotazioniEntity>();

export const annotazioniInitialState: AnnotazioniState = annotazioniAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const annotazioniReducer = createReducer(
  annotazioniInitialState,
  on(AnnotazioniActions.loadAnnotazioniInit, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(AnnotazioniActions.loadAnnotazioniSuccess, (state, { annotazioni }) =>
    annotazioniAdapter.setAll(annotazioni, { ...state, loaded: true })
  ),
  on(AnnotazioniActions.loadAnnotazioniFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function annotazioniReducerMethod(state: AnnotazioniState | undefined, action: Action) {
  return annotazioniReducer(state, action);
}
