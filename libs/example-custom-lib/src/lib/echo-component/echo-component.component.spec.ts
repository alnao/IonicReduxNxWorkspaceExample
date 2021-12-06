import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchoComponentComponent } from './echo-component.component';

describe('EchoComponentComponent', () => {
  let component: EchoComponentComponent;
  let fixture: ComponentFixture<EchoComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EchoComponentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EchoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
