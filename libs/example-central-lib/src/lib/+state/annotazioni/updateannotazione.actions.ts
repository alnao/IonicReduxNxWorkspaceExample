import { createAction, props } from "@ngrx/store";
import { UpdateannotazioneEntity } from "./updateannotazione.models";

export const loadUpdateannotazioneInit = createAction("[Updateannotazione Page] Init",
  props<{id: any; element: UpdateannotazioneEntity;}>() );
export const loadUpdateannotazioneSuccess = createAction(
  "[Updateannotazione/API] Load Updateannotazione Success",
  props<{ updateannotazione: UpdateannotazioneEntity[] }>() );
export const loadUpdateannotazioneFailure = createAction(
  "[Updateannotazione/API] Load Updateannotazione Failure", 
  props<{ error: any }>() );


