import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoosterList } from './booster-list';

describe('BoosterList', () => {
  let component: BoosterList;
  let fixture: ComponentFixture<BoosterList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoosterList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoosterList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
