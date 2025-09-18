import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchangePropose } from './echange-propose';

describe('EchangePropose', () => {
  let component: EchangePropose;
  let fixture: ComponentFixture<EchangePropose>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EchangePropose]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EchangePropose);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
