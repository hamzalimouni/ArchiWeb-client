import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEnroll } from 'src/app/_interfaces/enroll';
import { EnrollService } from 'src/app/_services/enroll.service';

@Component({
  selector: 'app-enroll-add',
  templateUrl: './enroll-add.component.html',
  styleUrls: ['./enroll-add.component.css']
})
export class EnrollAddComponent implements OnInit {
  enroll: IEnroll = {
    projectId: "",
    studentId: "",
    result: "",
  }

  constructor(private enrollService: EnrollService, private router: Router) { }
  ngOnInit(): void {

  }

  onSubmit() {
    this.enrollService.postEnroll(this.enroll).subscribe(
      data => this.router.navigate(['admin/enroll']),
      err => console.log(err)
    )
  }
}
