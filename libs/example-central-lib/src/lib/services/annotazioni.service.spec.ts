import { TestBed } from '@angular/core/testing';

import { AnnotazioniService } from './annotazioni.service';

describe('AnnotazioniService', () => {
  let service: AnnotazioniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnotazioniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
