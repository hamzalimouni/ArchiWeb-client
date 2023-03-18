import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-skills-delete',
  templateUrl: './skills-delete.component.html',
  styleUrls: ['./skills-delete.component.css']
})
export class SkillsDeleteComponent implements OnInit {
  constructor(private activated: ActivatedRoute) { }
  ngOnInit(): void {
    this.activated.params.subscribe(
      (data) => {
        console.log(data);
      }
    )
  }
}
