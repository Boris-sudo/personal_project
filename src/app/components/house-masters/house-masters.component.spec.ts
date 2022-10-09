import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseMastersComponent } from './house-masters.component';

describe('HouseMastersComponent', () => {
  let component: HouseMastersComponent;
  let fixture: ComponentFixture<HouseMastersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HouseMastersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HouseMastersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
