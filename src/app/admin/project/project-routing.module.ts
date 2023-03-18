import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsAddComponent } from './projects-add/projects-add.component';
import { ProjectsDeleteComponent } from './projects-delete/projects-delete.component';
import { ProjectsIndexComponent } from './projects-index/projects-index.component';
import { ProjectsUpdateComponent } from './projects-update/projects-update.component';

const routes: Routes = [
  { path: '', component: ProjectsIndexComponent },
  { path: 'add', component: ProjectsAddComponent },
  { path: 'update/:id', component: ProjectsUpdateComponent },
  { path: 'delete/:id', component: ProjectsDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
