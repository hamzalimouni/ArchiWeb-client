import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillRoutingModule } from './skill-routing.module';
import { SkillsIndexComponent } from './skills-index/skills-index.component';
import { SkillsAddComponent } from './skills-add/skills-add.component';
import { SkillsUpdateComponent } from './skills-update/skills-update.component';
import { SkillsDeleteComponent } from './skills-delete/skills-delete.component';


@NgModule({
  declarations: [
    SkillsIndexComponent,
    SkillsAddComponent,
    SkillsUpdateComponent,
    SkillsDeleteComponent
  ],
  imports: [
    CommonModule,
    SkillRoutingModule
  ]
})
export class SkillModule { }
