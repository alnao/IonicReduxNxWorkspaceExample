import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotazioneComponent } from './annotazione.component';

describe('AnnotazioneComponent', () => {
  let component: AnnotazioneComponent;
  let fixture: ComponentFixture<AnnotazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnotazioneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnotazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
