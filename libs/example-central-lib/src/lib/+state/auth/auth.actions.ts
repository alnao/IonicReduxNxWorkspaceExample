import { createAction, props } from "@ngrx/store";
import { AuthEntity } from "./auth.models";

export const loadAuthInit = createAction("[Auth Page] Init"
,props<{id: any; element: AuthEntity;}>() ) ;

export const loadAuthSuccess = createAction(
  "[Auth/API] Load Auth Success",
  props<{ auth: AuthEntity[] }>()
);

export const loadAuthFailure = createAction(
  "[Auth/API] Load Auth Failure",
  props<{ error: any }>()
);
