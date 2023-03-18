import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillsAddComponent } from './skills-add/skills-add.component';
import { SkillsDeleteComponent } from './skills-delete/skills-delete.component';
import { SkillsIndexComponent } from './skills-index/skills-index.component';
import { SkillsUpdateComponent } from './skills-update/skills-update.component';

const routes: Routes = [
  { path: '', component: SkillsIndexComponent },
  { path: 'add', component: SkillsAddComponent },
  { path: 'update/:id', component: SkillsUpdateComponent },
  { path: 'delete/:id', component: SkillsDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillRoutingModule { }
