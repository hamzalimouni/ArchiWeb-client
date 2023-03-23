import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollUpdateComponent } from './enroll-update.component';

describe('EnrollUpdateComponent', () => {
  let component: EnrollUpdateComponent;
  let fixture: ComponentFixture<EnrollUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
