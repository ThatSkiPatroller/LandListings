import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLeaseListComponent } from './edit-lease-list.component';

describe('EditLeaseListComponent', () => {
  let component: EditLeaseListComponent;
  let fixture: ComponentFixture<EditLeaseListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLeaseListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLeaseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
