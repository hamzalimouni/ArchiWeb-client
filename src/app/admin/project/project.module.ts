import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectsIndexComponent } from './projects-index/projects-index.component';
import { ProjectsAddComponent } from './projects-add/projects-add.component';
import { ProjectsUpdateComponent } from './projects-update/projects-update.component';
import { ProjectsDeleteComponent } from './projects-delete/projects-delete.component';


@NgModule({
  declarations: [
    ProjectsIndexComponent,
    ProjectsAddComponent,
    ProjectsUpdateComponent,
    ProjectsDeleteComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
