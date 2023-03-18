import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsDeleteComponent } from './projects-delete.component';

describe('ProjectsDeleteComponent', () => {
  let component: ProjectsDeleteComponent;
  let fixture: ComponentFixture<ProjectsDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
