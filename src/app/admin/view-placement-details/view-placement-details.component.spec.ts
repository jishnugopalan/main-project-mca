import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPlacementDetailsComponent } from './view-placement-details.component';

describe('ViewPlacementDetailsComponent', () => {
  let component: ViewPlacementDetailsComponent;
  let fixture: ComponentFixture<ViewPlacementDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPlacementDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPlacementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
