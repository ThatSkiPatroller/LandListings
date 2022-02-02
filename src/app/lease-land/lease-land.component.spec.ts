import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaseLandComponent } from './lease-land.component';

describe('LeaseLandComponent', () => {
  let component: LeaseLandComponent;
  let fixture: ComponentFixture<LeaseLandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaseLandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaseLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
