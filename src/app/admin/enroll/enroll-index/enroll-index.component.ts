import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enroll-index',
  templateUrl: './enroll-index.component.html',
  styleUrls: ['./enroll-index.component.css']
})
export class EnrollIndexComponent implements OnInit {
  ELEMENT_DATA: any[] = [];
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get('http://localhost:5000/api/enrollements').subscribe(
      (data: any) => { this.ELEMENT_DATA = data; console.log(this.ELEMENT_DATA) },
      err => console.log(err)
    )
  }
  displayedColumns: string[] = ['projectId', 'studentId', 'result', 'createdAt', 'action'];
  dataSource = this.ELEMENT_DATA;
}
