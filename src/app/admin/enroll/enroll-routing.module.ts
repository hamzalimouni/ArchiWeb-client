import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnrollAddComponent } from './enroll-add/enroll-add.component';
import { EnrollDeleteComponent } from './enroll-delete/enroll-delete.component';
import { EnrollIndexComponent } from './enroll-index/enroll-index.component';
import { EnrollUpdateComponent } from './enroll-update/enroll-update.component';

const routes: Routes = [
  { path: '', component: EnrollIndexComponent },
  { path: 'add', component: EnrollAddComponent },
  { path: 'update/:id', component: EnrollUpdateComponent },
  { path: 'delete/:id', component: EnrollDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnrollRoutingModule { }
