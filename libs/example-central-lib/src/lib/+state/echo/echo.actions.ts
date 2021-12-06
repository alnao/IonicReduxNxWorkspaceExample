import { createAction, props } from '@ngrx/store';
import { EchoEntity } from './echo.models';

export const init = createAction('[Echo Page] Init');

export const loadEchoSuccess = createAction(
  '[Echo/API] Load Echo Success',
  props<{ echo: EchoEntity[] }>()
);

export const loadEchoFailure = createAction(
  '[Echo/API] Load Echo Failure',
  props<{ error: any }>()
);
