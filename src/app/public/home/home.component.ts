import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from 'src/app/_services/project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  project: any = [{
    ownerId: "",
    title: "",
    desc: "",
    img: "",
    startAt: "",
    endAt: "",
  }];
  token: any;
  test: any;
  constructor(private projectService: ProjectService, private router: Router) {

  }

  ngOnInit() {
    this.projectService.getAllProjects().subscribe(
      data => this.project = data,
      err => console.log(err));

  }

}
