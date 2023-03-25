import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SkillService } from 'src/app/_services/skill.service';

@Component({
  selector: 'app-skills-index',
  templateUrl: './skills-index.component.html',
  styleUrls: ['./skills-index.component.css']
})
export class SkillsIndexComponent implements OnInit {
  ELEMENT_DATA: any[] = [];
  constructor(private skillService: SkillService) { }
  ngOnInit(): void {
    this.skillService.getAllSkills().subscribe(
      (data: any) => { this.ELEMENT_DATA = data; console.log(this.ELEMENT_DATA) },
      err => console.log(err)
    )
  }
  displayedColumns: string[] = ['title', 'desc', 'level', 'createdAt', 'action'];
  dataSource = this.ELEMENT_DATA;

  delete(id: string) {
    this.skillService.deleteSkill(id).subscribe(
      data => {
        console.log(data);
        this.ngOnInit();
      },
      err => { console.log(err) }
    )
  }
}
