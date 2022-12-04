import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelezioneMultiplaComponent } from './selezione-multipla.component';

describe('SelezioneMultiplaComponent', () => {
  let component: SelezioneMultiplaComponent;
  let fixture: ComponentFixture<SelezioneMultiplaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelezioneMultiplaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelezioneMultiplaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
