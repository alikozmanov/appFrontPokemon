import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoosterOpen } from './booster-open';

describe('BoosterOpen', () => {
  let component: BoosterOpen;
  let fixture: ComponentFixture<BoosterOpen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoosterOpen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoosterOpen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
