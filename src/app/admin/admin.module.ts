import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AlayoutComponent } from './alayout/alayout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
// import { UserRoutingModule } from './user/user-routing.module';
// import { ProjectRoutingModule } from './project/project-routing.module';
// import { SkillRoutingModule } from './skill/skill-routing.module';


@NgModule({
  declarations: [
    AlayoutComponent,
    DashboardComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    // UserRoutingModule,
    // ProjectRoutingModule,
    // SkillRoutingModule
  ]
})
export class AdminModule { }
