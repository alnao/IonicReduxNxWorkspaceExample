import { TestBed, async } from "@angular/core/testing";

import { Observable } from "rxjs";

import { provideMockActions } from "@ngrx/effects/testing";
import { provideMockStore } from "@ngrx/store/testing";

import { NxModule, DataPersistence } from "@nrwl/angular";
import { hot } from "@nrwl/angular/testing";

import { AnnotazioniEffects } from "./annotazioni.effects";
import * as AnnotazioniActions from "./annotazioni.actions";

describe("AnnotazioniEffects", () => {
  let actions: Observable<any>;
  let effects: AnnotazioniEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        AnnotazioniEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(AnnotazioniEffects);
  });

  describe("init$", () => {
    it("should work", () => {
      actions = hot("-a-|", { a: AnnotazioniActions.init() });

      const expected = hot("-a-|", {
        a: AnnotazioniActions.loadAnnotazioniSuccess({ annotazioni: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
