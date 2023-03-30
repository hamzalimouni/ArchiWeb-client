import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISinglProject } from 'src/app/_interfaces/project';
import { EnrollService } from 'src/app/_services/enroll.service';
import { ProjectService } from 'src/app/_services/project.service';
import { TokenService } from 'src/app/_services/token.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  project: any = {
    ownerId: "",
    title: "",
    desc: "",
    img: "",
    startAt: "",
    endAt: "",
  }
  enroll: any = {
    studentId: "",
    projectId: "",
    result: ""
  }
  img: string = "https://i0.wp.com/www.flutterbeads.com/wp-content/uploads/2022/01/add-image-in-flutter-hero.png?resize=950%2C500&ssl=1";
  constructor(private snackBar: MatSnackBar, private activatedRoute: ActivatedRoute, private projectService: ProjectService, private enrollService: EnrollService, private tokenService: TokenService) { }
  ngOnInit(): void {
    let projectId = this.activatedRoute.snapshot.paramMap.get('id');
    this.projectService.getProject(projectId).subscribe(
      (data: ISinglProject) => { this.project = data; console.log(data) },
    )
  }

  onSubmit() {
    this.enroll.projectId = this.project._id;
    this.enroll.studentId = this.tokenService.getId();
    this.enrollService.postEnroll(this.enroll).subscribe(
      data => console.log(data),
      err => console.log(err)
    )
    this.enrollService.getStudentsEnrolls(this.tokenService.getId()).subscribe(
      data => console.log(data)
    )
    this.snackBar.open('You are enrolled the project', 'Successfull', {
      duration: 3000, // Optional: How long to show the snackbar in milliseconds
    });
  }
}
