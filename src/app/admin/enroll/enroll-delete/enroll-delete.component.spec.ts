import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollDeleteComponent } from './enroll-delete.component';

describe('EnrollDeleteComponent', () => {
  let component: EnrollDeleteComponent;
  let fixture: ComponentFixture<EnrollDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
