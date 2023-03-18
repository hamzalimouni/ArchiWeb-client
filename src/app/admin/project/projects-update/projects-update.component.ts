import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-projects-update',
  templateUrl: './projects-update.component.html',
  styleUrls: ['./projects-update.component.css']
})
export class ProjectsUpdateComponent implements OnInit {
  constructor(private activated: ActivatedRoute) { }
  ngOnInit(): void {
    this.activated.params.subscribe(
      (data) => {
        console.log(data);
      }
    )
  }
}
