import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetComplaintsComponent } from './get-complaints.component';

describe('GetComplaintsComponent', () => {
  let component: GetComplaintsComponent;
  let fixture: ComponentFixture<GetComplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetComplaintsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
