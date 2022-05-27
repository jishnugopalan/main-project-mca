import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComplaintsToAdminComponent } from './view-complaints-to-admin.component';

describe('ViewComplaintsToAdminComponent', () => {
  let component: ViewComplaintsToAdminComponent;
  let fixture: ComponentFixture<ViewComplaintsToAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewComplaintsToAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComplaintsToAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
