import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePlacementDetailsComponent } from './update-placement-details.component';

describe('UpdatePlacementDetailsComponent', () => {
  let component: UpdatePlacementDetailsComponent;
  let fixture: ComponentFixture<UpdatePlacementDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePlacementDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePlacementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
