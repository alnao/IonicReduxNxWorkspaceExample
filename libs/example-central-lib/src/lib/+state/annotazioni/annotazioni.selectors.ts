import { createFeatureSelector, createSelector } from "@ngrx/store";
import {
  ANNOTAZIONI_FEATURE_KEY,
  AnnotazioniState,
  AnnotazioniPartialState,
  annotazioniAdapter,
} from "./annotazioni.reducer";

// Lookup the 'Annotazioni' feature state managed by NgRx
export const getAnnotazioniState = createFeatureSelector<
  AnnotazioniPartialState,
  AnnotazioniState
>(ANNOTAZIONI_FEATURE_KEY);

const { selectAll, selectEntities } = annotazioniAdapter.getSelectors();

export const getAnnotazioniLoaded = createSelector(
  getAnnotazioniState,
  (state: AnnotazioniState) => state.loaded
);

export const getAnnotazioniError = createSelector(
  getAnnotazioniState,
  (state: AnnotazioniState) => state.error
);

export const getAllAnnotazioni = createSelector(
  getAnnotazioniState,
  (state: AnnotazioniState) => selectAll(state)
);

export const getAnnotazioniEntities = createSelector(
  getAnnotazioniState,
  (state: AnnotazioniState) => selectEntities(state)
);
/*
export const getSelectedId = createSelector(
  getAnnotazioniState,
  (state: AnnotazioniState) => state.selectedId
);

export const getSelected = createSelector(
  getAnnotazioniEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
*/