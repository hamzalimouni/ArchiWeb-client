import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectsIndexComponent } from './projects-index/projects-index.component';
import { ProjectsAddComponent } from './projects-add/projects-add.component';
import { ProjectsUpdateComponent } from './projects-update/projects-update.component';
import { ProjectsDeleteComponent } from './projects-delete/projects-delete.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    ProjectsIndexComponent,
    ProjectsAddComponent,
    ProjectsUpdateComponent,
    ProjectsDeleteComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatInputModule,
    FormsModule,
    MatSelectModule
  ]
})
export class ProjectModule { }
