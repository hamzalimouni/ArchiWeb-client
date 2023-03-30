import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IProject } from 'src/app/_interfaces/project';
import { ProjectService } from 'src/app/_services/project.service';
import { TokenService } from 'src/app/_services/token.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  project: IProject = {
    ownerId: "",
    title: "",
    desc: "",
    img: "",
    startAt: "",
    endAt: "",
  }
  constructor(private projectService: ProjectService, private tokenService: TokenService, private router: Router) { }
  ngOnInit(): void {
    let ownerId = this.tokenService.getId();
    if (ownerId !== null) {
      this.project.ownerId = ownerId;
    }
  }
  onSubmit() {
    this.projectService.postProject(this.project).subscribe(
      data => this.router.navigate(['owner']),
      err => console.log(err)
    )
  }
}
