import { createReducer, on, Action } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";

import * as UpdateannotazioneActions from "./updateannotazione.actions";
import { UpdateannotazioneEntity } from "./updateannotazione.models";

export const UPDATEANNOTAZIONE_FEATURE_KEY = "updateannotazione";

export interface UpdateannotazioneState extends EntityState<UpdateannotazioneEntity> {
  selectedId?: string | number; // which Updateannotazione record has been selected
  loaded: boolean; // has the Updateannotazione list been loaded
  error?: string | null; // last known error (if any)
}

export interface UpdateannotazionePartialState {
  readonly [UPDATEANNOTAZIONE_FEATURE_KEY]: UpdateannotazioneState;
}

export const updateannotazioneAdapter: EntityAdapter<UpdateannotazioneEntity> =
  createEntityAdapter<UpdateannotazioneEntity>();

export const UpdateannotazioneinitialState: UpdateannotazioneState = updateannotazioneAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const updateannotazioneReducer = createReducer(
  UpdateannotazioneinitialState,
  on(UpdateannotazioneActions.loadUpdateannotazioneInit, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(
    UpdateannotazioneActions.loadUpdateannotazioneSuccess,
    (state, { updateannotazione }) =>
      updateannotazioneAdapter.setAll(updateannotazione, {
        ...state,
        loaded: true,
      })
  ),
  on(
    UpdateannotazioneActions.loadUpdateannotazioneFailure,
    (state, { error }) => ({ ...state, error })
  )
);

export function UpdateannotazioneReducer(state: UpdateannotazioneState | undefined, action: Action) {
  return updateannotazioneReducer(state, action);
}
