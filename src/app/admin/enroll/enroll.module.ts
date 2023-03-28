import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrollRoutingModule } from './enroll-routing.module';
import { EnrollIndexComponent } from './enroll-index/enroll-index.component';
import { EnrollAddComponent } from './enroll-add/enroll-add.component';
import { EnrollUpdateComponent } from './enroll-update/enroll-update.component';
import { EnrollDeleteComponent } from './enroll-delete/enroll-delete.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    EnrollIndexComponent,
    EnrollAddComponent,
    EnrollUpdateComponent,
    EnrollDeleteComponent
  ],
  imports: [
    CommonModule,
    EnrollRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule,
    MatInputModule
  ]
})
export class EnrollModule { }
