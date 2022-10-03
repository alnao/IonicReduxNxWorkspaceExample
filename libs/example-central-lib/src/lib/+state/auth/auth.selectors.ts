import { JwtHelperService } from "@auth0/angular-jwt";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import {
  AUTH_FEATURE_KEY,
  AuthState,
  AuthPartialState,
  authAdapter,
} from "./auth.reducer";

// Lookup the 'Auth' feature state managed by NgRx
export const getAuthState = createFeatureSelector<AuthPartialState, AuthState>(
  AUTH_FEATURE_KEY
);

const { selectAll, selectEntities } = authAdapter.getSelectors();

export const getAuthLoaded = createSelector(
  getAuthState,
  (state: AuthState) => state.loaded
);

export const getAuthError = createSelector(
  getAuthState,
  (state: AuthState) => state.error
);
/*
export const getAllAuth = createSelector(getAuthState, (state: State) =>
  selectAll(state)
);

export const getAuthEntities = createSelector(getAuthState, (state: State) =>
  selectEntities(state)
);
/*
export const getSelectedId = createSelector(
  getAuthState,
  (state: State) => state.selectedId
);*/

export const isUserEnabledRole = createSelector(  getAuthState,
  (state: AuthState, role : string) => {
    let auth=false;
    const ut=selectAll(state)[0];
    const jwtService = new JwtHelperService();
    const ruoli  : any[]= jwtService.decodeToken(ut.towenJwt)['role'];
    //console.log(ruoli);
    if ((ruoli!==undefined ) && (ruoli.some( r => r.authority === role ) )){
      auth=true;
    }
    return auth;
  }
);


export const getUtente = createSelector(
  getAuthState,
  (state: AuthState) => selectAll(state)[0]
);
export const isUserLogged = createSelector(
  getAuthState,
  (state: AuthState) => { //console.log ("isUserLogged",selectAll(state)[0]);
    return selectAll(state)[0]?.towenJwt!==null && selectAll(state)[0]!== undefined;
  }
);


/*
export const getSelected = createSelector(
  getAuthEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);

*/