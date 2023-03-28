import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IProject } from 'src/app/_interfaces/project';
import { ProjectService } from 'src/app/_services/project.service';

@Component({
  selector: 'app-projects-add',
  templateUrl: './projects-add.component.html',
  styleUrls: ['./projects-add.component.css']
})
export class ProjectsAddComponent implements OnInit {
  project: IProject = {
    ownerId: "",
    title: "",
    desc: "",
    img: "",
    startAt: "",
    endAt: "",
  }

  constructor(private projectService: ProjectService, private router: Router) { }
  ngOnInit(): void {

  }

  onSubmit() {
    this.projectService.postProject(this.project).subscribe(
      data => this.router.navigate(['admin/project']),
      err => console.log(err)
    )
  }
}
