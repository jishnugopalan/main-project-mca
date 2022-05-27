import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdminComplaintComponent } from './view-admin-complaint.component';

describe('ViewAdminComplaintComponent', () => {
  let component: ViewAdminComplaintComponent;
  let fixture: ComponentFixture<ViewAdminComplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAdminComplaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAdminComplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
