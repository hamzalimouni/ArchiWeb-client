import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'add', component: PostComponent },
  { path: 'update/:id', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
