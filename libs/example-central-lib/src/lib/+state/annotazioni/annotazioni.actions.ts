import { createAction, props } from "@ngrx/store";
import { AnnotazioniEntity } from "./annotazioni.models";

export const loadAnnotazioniInit = createAction("[Annotazioni Page] Init");

export const loadAnnotazioniSuccess = createAction(
  "[Annotazioni/API] Load Annotazioni Success",
  props<{ annotazioni: AnnotazioniEntity[] }>()
);

export const loadAnnotazioniFailure = createAction(
  "[Annotazioni/API] Load Annotazioni Failure",
  props<{ error: any }>()
);
