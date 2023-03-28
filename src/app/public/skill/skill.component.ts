import { Component, OnInit } from '@angular/core';
import { IDataSkill } from 'src/app/_interfaces/skill';
import { SkillService } from 'src/app/_services/skill.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  ELEMENT_DATA: IDataSkill[] = [];
  constructor(private skillService: SkillService) { }
  ngOnInit(): void {
    this.skillService.getAllSkills().subscribe(
      (data: IDataSkill[]) => { this.ELEMENT_DATA = data; console.log(this.ELEMENT_DATA) },
      err => console.log(err)
    )
  }
  displayedColumns: string[] = ['title', 'desc', 'level', 'createdAt'];
  dataSource = this.ELEMENT_DATA;
}
