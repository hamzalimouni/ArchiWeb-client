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
    MatButtonModule
  ]
})
export class EnrollModule { }
