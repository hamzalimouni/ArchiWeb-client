import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills-index',
  templateUrl: './skills-index.component.html',
  styleUrls: ['./skills-index.component.css']
})
export class SkillsIndexComponent implements OnInit {
  ELEMENT_DATA: any[] = [];
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http.get('http://localhost:5000/api/skills').subscribe(
      (data: any) => { this.ELEMENT_DATA = data; console.log(this.ELEMENT_DATA) },
      err => console.log(err)
    )
  }
  displayedColumns: string[] = ['title', 'desc', 'level', 'createdAt', 'action'];
  dataSource = this.ELEMENT_DATA;
}
