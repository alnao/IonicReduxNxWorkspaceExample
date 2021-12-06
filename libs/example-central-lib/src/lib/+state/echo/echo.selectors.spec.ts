import { EchoEntity } from './echo.models';
import { State, echoAdapter, initialState } from './echo.reducer';
import * as EchoSelectors from './echo.selectors';

describe('Echo Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getEchoId = (it) => it['id'];
  const createEchoEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as EchoEntity);

  let state;

  beforeEach(() => {
    state = {
      echo: echoAdapter.setAll(
        [
          createEchoEntity('PRODUCT-AAA'),
          createEchoEntity('PRODUCT-BBB'),
          createEchoEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Echo Selectors', () => {
    it('getAllEcho() should return the list of Echo', () => {
      const results = EchoSelectors.getAllEcho(state);
      const selId = getEchoId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = EchoSelectors.getSelected(state);
      const selId = getEchoId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getEchoLoaded() should return the current 'loaded' status", () => {
      const result = EchoSelectors.getEchoLoaded(state);

      expect(result).toBe(true);
    });

    it("getEchoError() should return the current 'error' state", () => {
      const result = EchoSelectors.getEchoError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
