import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEnroll, ISinglEnroll } from 'src/app/_interfaces/enroll';
import { EnrollService } from 'src/app/_services/enroll.service';

@Component({
  selector: 'app-enroll-update',
  templateUrl: './enroll-update.component.html',
  styleUrls: ['./enroll-update.component.css']
})
export class EnrollUpdateComponent implements OnInit {
  enroll: any = {
    _id: "",
    projectId: "",
    studentId: "",
    result: "",
  }

  constructor(private activated: ActivatedRoute, private router: Router, private enrollService: EnrollService) { }
  ngOnInit(): void {
    let id = this.activated.snapshot.paramMap.get('id');
    this.enrollService.getEnroll(id).subscribe(
      (data: ISinglEnroll) => this.enroll = data,
      err => console.log(err)
    )
  }

  onSubmit() {
    this.enrollService.updateEnroll(this.enroll).subscribe(
      data => this.router.navigate(['admin/enroll']),
      err => console.log(err)
    )
  }
}
