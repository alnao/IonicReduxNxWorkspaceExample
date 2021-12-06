import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  ECHO_FEATURE_KEY,
  State,
  EchoPartialState,
  echoAdapter,
} from './echo.reducer';

// Lookup the 'Echo' feature state managed by NgRx
export const getEchoState = createFeatureSelector<EchoPartialState, State>(
  ECHO_FEATURE_KEY
);

const { selectAll, selectEntities } = echoAdapter.getSelectors();

export const getEchoLoaded = createSelector(
  getEchoState,
  (state: State) => state.loaded
);

export const getEchoError = createSelector(
  getEchoState,
  (state: State) => state.error
);

export const getAllEcho = createSelector(getEchoState, (state: State) =>
  selectAll(state)
);

export const getEchoEntities = createSelector(getEchoState, (state: State) =>
  selectEntities(state)
);

export const getSelectedId = createSelector(
  getEchoState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getEchoEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
