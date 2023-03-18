import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-skills-update',
  templateUrl: './skills-update.component.html',
  styleUrls: ['./skills-update.component.css']
})
export class SkillsUpdateComponent implements OnInit {
  constructor(private activated: ActivatedRoute) { }
  ngOnInit(): void {
    this.activated.params.subscribe(
      (data) => {
        console.log(data);
      }
    )
  }
}
