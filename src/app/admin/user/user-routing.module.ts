import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersAddComponent } from './users-add/users-add.component';
import { UsersDeleteComponent } from './users-delete/users-delete.component';
import { UsersIndexComponent } from './users-index/users-index.component';
import { UsersUpdateComponent } from './users-update/users-update.component';

const routes: Routes = [
  { path: '', component: UsersIndexComponent },
  { path: 'add', component: UsersAddComponent },
  { path: 'update/:id', component: UsersUpdateComponent },
  { path: 'delete/:id', component: UsersDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
