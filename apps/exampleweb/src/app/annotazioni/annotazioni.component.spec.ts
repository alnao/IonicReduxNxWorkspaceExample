import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotazioniComponent } from './annotazioni.component';

describe('AnnotazioniComponent', () => {
  let component: AnnotazioniComponent;
  let fixture: ComponentFixture<AnnotazioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnotazioniComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnotazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
