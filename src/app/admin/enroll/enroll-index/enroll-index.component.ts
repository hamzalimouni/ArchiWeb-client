import { Component, OnInit } from '@angular/core';
import { IDataEnroll } from 'src/app/_interfaces/enroll';
import { EnrollService } from 'src/app/_services/enroll.service';

@Component({
  selector: 'app-enroll-index',
  templateUrl: './enroll-index.component.html',
  styleUrls: ['./enroll-index.component.css']
})
export class EnrollIndexComponent implements OnInit {
  ELEMENT_DATA: IDataEnroll[] = [];
  constructor(private enrollService: EnrollService) { }
  ngOnInit(): void {
    this.enrollService.getAllEnrolls().subscribe(
      data => { this.ELEMENT_DATA = data; console.log(this.ELEMENT_DATA) },
      err => console.log(err)
    )
  }
  displayedColumns: string[] = ['projectId', 'studentId', 'result', 'createdAt', 'action'];
  dataSource = this.ELEMENT_DATA;

  delete(id: string) {
    this.enrollService.delete(id).subscribe(
      data => {
        console.log(data);
        this.ngOnInit();
      },
      err => console.log(err)
    )
  }
}
