import { createFeatureSelector, createSelector } from "@ngrx/store";
import {
  UPDATEANNOTAZIONE_FEATURE_KEY,
  UpdateannotazioneState,
  UpdateannotazionePartialState,
  updateannotazioneAdapter,
} from "./updateannotazione.reducer";

// Lookup the 'Updateannotazione' feature state managed by NgRx
export const getUpdateannotazioneState = createFeatureSelector<
  UpdateannotazionePartialState,
  UpdateannotazioneState
>(UPDATEANNOTAZIONE_FEATURE_KEY);

const { selectAll, selectEntities } = updateannotazioneAdapter.getSelectors();

export const getUpdateannotazioneLoaded = createSelector(
  getUpdateannotazioneState,
  (state: UpdateannotazioneState) => state.loaded
);

export const getUpdateannotazioneError = createSelector(
  getUpdateannotazioneState,
  (state: UpdateannotazioneState) => state.error
);

export const getAllUpdateannotazione = createSelector(
  getUpdateannotazioneState,
  (state: UpdateannotazioneState) => selectAll(state)
);

export const getUpdateannotazioneEntities = createSelector(
  getUpdateannotazioneState,
  (state: UpdateannotazioneState) => selectEntities(state)
);


/*
export const getSelectedId = createSelector(
  getUpdateannotazioneState,
  (state: UpdateannotazioneState) => state.selectedId
);

export const getSelected = createSelector(
  getUpdateannotazioneEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
*/