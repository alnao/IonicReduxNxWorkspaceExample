import { UpdateannotazioneEntity } from "./updateannotazione.models";
import * as UpdateannotazioneActions from "./updateannotazione.actions";
import { State, initialState, reducer } from "./updateannotazione.reducer";

describe("Updateannotazione Reducer", () => {
  const createUpdateannotazioneEntity = (id: string, name = "") =>
    ({
      id,
      name: name || `name-${id}`,
    } as UpdateannotazioneEntity);

  beforeEach(() => {});

  describe("valid Updateannotazione actions", () => {
    it("loadUpdateannotazioneSuccess should return set the list of known Updateannotazione", () => {
      const updateannotazione = [
        createUpdateannotazioneEntity("PRODUCT-AAA"),
        createUpdateannotazioneEntity("PRODUCT-zzz"),
      ];
      const action = UpdateannotazioneActions.loadUpdateannotazioneSuccess({
        updateannotazione,
      });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe("unknown action", () => {
    it("should return the previous state", () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
