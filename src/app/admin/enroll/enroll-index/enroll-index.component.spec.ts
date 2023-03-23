import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollIndexComponent } from './enroll-index.component';

describe('EnrollIndexComponent', () => {
  let component: EnrollIndexComponent;
  let fixture: ComponentFixture<EnrollIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
