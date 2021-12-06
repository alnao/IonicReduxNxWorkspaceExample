import { EchoEntity } from './echo.models';
import * as EchoActions from './echo.actions';
import { State, initialState, reducer } from './echo.reducer';

describe('Echo Reducer', () => {
  const createEchoEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as EchoEntity);

  beforeEach(() => {});

  describe('valid Echo actions', () => {
    it('loadEchoSuccess should return set the list of known Echo', () => {
      const echo = [
        createEchoEntity('PRODUCT-AAA'),
        createEchoEntity('PRODUCT-zzz'),
      ];
      const action = EchoActions.loadEchoSuccess({ echo });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
