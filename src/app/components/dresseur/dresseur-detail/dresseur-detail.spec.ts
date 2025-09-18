import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DresseurDetail } from './dresseur-detail';

describe('DresseurDetail', () => {
  let component: DresseurDetail;
  let fixture: ComponentFixture<DresseurDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DresseurDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DresseurDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
