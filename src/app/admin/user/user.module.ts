import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersIndexComponent } from './users-index/users-index.component';
import { UsersAddComponent } from './users-add/users-add.component';
import { UsersUpdateComponent } from './users-update/users-update.component';
import { UsersDeleteComponent } from './users-delete/users-delete.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    UsersIndexComponent,
    UsersAddComponent,
    UsersUpdateComponent,
    UsersDeleteComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatInputModule,
    FormsModule
  ]
})
export class UserModule { }
