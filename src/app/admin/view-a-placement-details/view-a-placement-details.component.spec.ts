import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAPlacementDetailsComponent } from './view-a-placement-details.component';

describe('ViewAPlacementDetailsComponent', () => {
  let component: ViewAPlacementDetailsComponent;
  let fixture: ComponentFixture<ViewAPlacementDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAPlacementDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAPlacementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
