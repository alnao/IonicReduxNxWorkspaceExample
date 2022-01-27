import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotazioneDettaglioComponent } from './annotazione-dettaglio.component';

describe('AnnotazioneDettaglioComponent', () => {
  let component: AnnotazioneDettaglioComponent;
  let fixture: ComponentFixture<AnnotazioneDettaglioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnotazioneDettaglioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnotazioneDettaglioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
