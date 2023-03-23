import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollAddComponent } from './enroll-add.component';

describe('EnrollAddComponent', () => {
  let component: EnrollAddComponent;
  let fixture: ComponentFixture<EnrollAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnrollAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
