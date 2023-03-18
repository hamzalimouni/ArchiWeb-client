import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsIndexComponent } from './skills-index.component';

describe('SkillsIndexComponent', () => {
  let component: SkillsIndexComponent;
  let fixture: ComponentFixture<SkillsIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
