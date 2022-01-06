import { AnnotazioniEntity } from "./annotazioni.models";
import { AnnotazioniState, annotazioniAdapter, annotazioniInitialState } from "./annotazioni.reducer";
import * as AnnotazioniSelectors from "./annotazioni.selectors";

describe("Annotazioni Selectors", () => {
  const ERROR_MSG = "No Error Available";
  const getAnnotazioniId = (it) => it["id"];
  const createAnnotazioniEntity = (id: string, name = "") =>
  ({
    id,
    name: name || `name-${id}`,
  } as AnnotazioniEntity);

  let state;

  beforeEach(() => {
    state = {
      annotazioni: annotazioniAdapter.setAll(
        [
          createAnnotazioniEntity("PRODUCT-AAA"),
          createAnnotazioniEntity("PRODUCT-BBB"),
          createAnnotazioniEntity("PRODUCT-CCC"),
        ],
        {
          ...annotazioniInitialState,
          selectedId: "PRODUCT-BBB",
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe("Annotazioni Selectors", () => {
    it("getAllAnnotazioni() should return the list of Annotazioni", () => {
      const results = AnnotazioniSelectors.getAllAnnotazioni(state);
      const selId = getAnnotazioniId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe("PRODUCT-BBB");
    });

    it("getSelected() should return the selected Entity", () => {
      const result = AnnotazioniSelectors.getSelected(state);
      const selId = getAnnotazioniId(result);

      expect(selId).toBe("PRODUCT-BBB");
    });

    it("getAnnotazioniLoaded() should return the current 'loaded' status", () => {
      const result = AnnotazioniSelectors.getAnnotazioniLoaded(state);

      expect(result).toBe(true);
    });

    it("getAnnotazioniError() should return the current 'error' state", () => {
      const result = AnnotazioniSelectors.getAnnotazioniError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
