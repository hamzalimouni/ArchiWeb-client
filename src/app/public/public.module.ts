import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SingleComponent } from './single/single.component';
import { SkillComponent } from './skill/skill.component';
import { AppRoutingModule } from './public-routing.module';
import { PlayoutComponent } from './playout/playout.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    HomeComponent,
    SingleComponent,
    SkillComponent,
    PlayoutComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class PublicModule { }
