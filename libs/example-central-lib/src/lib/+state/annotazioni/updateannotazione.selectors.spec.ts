import { UpdateannotazioneEntity } from "./updateannotazione.models";
import {
  UpdateannotazioneState,
  updateannotazioneAdapter,
  initialState,
} from "./updateannotazione.reducer";
import * as UpdateannotazioneSelectors from "./updateannotazione.selectors";

describe("Updateannotazione Selectors", () => {
  const ERROR_MSG = "No Error Available";
  const getUpdateannotazioneId = (it) => it["id"];
  const createUpdateannotazioneEntity = (id: string) =>
    ({
      id
    } as UpdateannotazioneEntity);

  let state;

  beforeEach(() => {
    state = {
      updateannotazione: updateannotazioneAdapter.setAll(
        [
          createUpdateannotazioneEntity("PRODUCT-AAA"),
          createUpdateannotazioneEntity("PRODUCT-BBB"),
          createUpdateannotazioneEntity("PRODUCT-CCC"),
        ],
        {
          ...initialState,
          selectedId: "PRODUCT-BBB",
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe("Updateannotazione Selectors", () => {
    it("getAllUpdateannotazione() should return the list of Updateannotazione", () => {
      const results = UpdateannotazioneSelectors.getAllUpdateannotazione(state);
      const selId = getUpdateannotazioneId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe("PRODUCT-BBB");
    });
/*
    it("getSelected() should return the selected Entity", () => {
      const result = UpdateannotazioneSelectors.getSelected(state);
      const selId = getUpdateannotazioneId(result);

      expect(selId).toBe("PRODUCT-BBB");
    });
*/
    it("getUpdateannotazioneLoaded() should return the current 'loaded' status", () => {
      const result =
        UpdateannotazioneSelectors.getUpdateannotazioneLoaded(state);

      expect(result).toBe(true);
    });

    it("getUpdateannotazioneError() should return the current 'error' state", () => {
      const result =
        UpdateannotazioneSelectors.getUpdateannotazioneError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
