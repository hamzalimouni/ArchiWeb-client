import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ISinglSkill, ISkill } from 'src/app/_interfaces/skill';
import { SkillService } from 'src/app/_services/skill.service';

@Component({
  selector: 'app-skills-update',
  templateUrl: './skills-update.component.html',
  styleUrls: ['./skills-update.component.css']
})
export class SkillsUpdateComponent implements OnInit {
  skill: any = {
    title: "",
    desc: "",
    level: "",
  }
  constructor(private activated: ActivatedRoute, private skillService: SkillService, private router: Router) { }
  ngOnInit(): void {
    let id = this.activated.snapshot.paramMap.get('id');
    console.log(id);
    this.skillService.getSkill(id).subscribe(
      (data: ISinglSkill) => this.skill = data,
      err => console.log(err),
    )
  }
  onSubmit() {
    this.skillService.updateSkill(this.skill).subscribe(
      data => this.router.navigate(['admin/skill']),
      err => console.log(err),
    )
  }
}
