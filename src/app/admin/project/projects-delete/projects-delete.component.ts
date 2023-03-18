import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects-delete',
  templateUrl: './projects-delete.component.html',
  styleUrls: ['./projects-delete.component.css']
})
export class ProjectsDeleteComponent implements OnInit {
  constructor(private activated: ActivatedRoute) { }
  ngOnInit(): void {
    this.activated.params.subscribe(
      (data) => {
        console.log(data);
      }
    )
  }
}
