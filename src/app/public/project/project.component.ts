import { Component, OnInit } from '@angular/core';
import { IDataEnroll } from 'src/app/_interfaces/enroll';
import { EnrollService } from 'src/app/_services/enroll.service';
import { TokenService } from 'src/app/_services/token.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  ELEMENT_DATA: IDataEnroll[] = [];
  constructor(private enrollService: EnrollService, private tokenService: TokenService) { }
  ngOnInit(): void {
    this.enrollService.getStudentsEnrolls(this.tokenService.getId()).subscribe(
      (data: IDataEnroll[]) => { this.ELEMENT_DATA = data; console.log(this.ELEMENT_DATA) },
      err => console.log(err)
    )
  }
  displayedColumns: string[] = ['projectId', 'result'];
  dataSource = this.ELEMENT_DATA;
}
