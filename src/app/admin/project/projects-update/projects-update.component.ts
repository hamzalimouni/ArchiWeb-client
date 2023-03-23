import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProject, ISinglProject } from 'src/app/_interfaces/project';
import { ProjectService } from 'src/app/_services/project.service';

@Component({
  selector: 'app-projects-update',
  templateUrl: './projects-update.component.html',
  styleUrls: ['./projects-update.component.css']
})
export class ProjectsUpdateComponent implements OnInit {
  project: any = {
    _id: "",
    ownerId: "",
    title: "",
    desc: "",
    img: "",
    startAt: "",
    endAt: "",
    createdAt: "",
    updatedAt: "",
  }
  constructor(private activated: ActivatedRoute, private projectService: ProjectService, private router: Router) { }
  ngOnInit(): void {
    let id = this.activated.snapshot.paramMap.get('id');
    console.log(id);
    this.projectService.getProject(id).subscribe(
      (data: ISinglProject) => { this.project = data; console.log(this.project) },
      err => console.log(err),
    )
  }

  onSubmit() {
    this.projectService.updateProject(this.project).subscribe(
      data => {
        this.router.navigate(['admin/project']);
      },
      err => console.log(err),
    )
  }
}

