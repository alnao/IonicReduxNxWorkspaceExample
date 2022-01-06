import { AnnotazioniEntity } from "./annotazioni.models";
import * as AnnotazioniActions from "./annotazioni.actions";
import { State, initialState, reducer } from "./annotazioni.reducer";

describe("Annotazioni Reducer", () => {
  const createAnnotazioniEntity = (id: string, name = "") =>
    ({
      id,
      name: name || `name-${id}`,
    } as AnnotazioniEntity);

  beforeEach(() => {});

  describe("valid Annotazioni actions", () => {
    it("loadAnnotazioniSuccess should return set the list of known Annotazioni", () => {
      const annotazioni = [
        createAnnotazioniEntity("PRODUCT-AAA"),
        createAnnotazioniEntity("PRODUCT-zzz"),
      ];
      const action = AnnotazioniActions.loadAnnotazioniSuccess({ annotazioni });

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
