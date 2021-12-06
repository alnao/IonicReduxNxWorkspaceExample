import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { EchoEffects } from './echo.effects';
import * as EchoActions from './echo.actions';

describe('EchoEffects', () => {
  let actions: Observable<any>;
  let effects: EchoEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        EchoEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(EchoEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: EchoActions.init() });

      const expected = hot('-a-|', {
        a: EchoActions.loadEchoSuccess({ echo: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
