import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SkillService } from 'src/app/_services/skill.service';

@Component({
  selector: 'app-skills-add',
  templateUrl: './skills-add.component.html',
  styleUrls: ['./skills-add.component.css']
})
export class SkillsAddComponent implements OnInit {
  skill: any = {
    title: "",
    desc: "",
    level: "",
  }
  constructor(private skillService: SkillService, private router: Router) { }
  ngOnInit(): void {

  }
  onSubmit() {
    this.skillService.postSkill(this.skill).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['admin/skill']);
      },
      err => console.log(err)
    )
  }
}
