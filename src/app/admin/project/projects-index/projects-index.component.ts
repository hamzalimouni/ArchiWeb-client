import { Component, OnInit } from '@angular/core';
import { IDataProject } from 'src/app/_interfaces/project';
import { ProjectService } from 'src/app/_services/project.service';

@Component({
  selector: 'app-projects-index',
  templateUrl: './projects-index.component.html',
  styleUrls: ['./projects-index.component.css']
})
export class ProjectsIndexComponent implements OnInit {
  ELEMENT_DATA: IDataProject[] = [];
  constructor(private projectService: ProjectService) { }
  ngOnInit(): void {
    this.projectService.getAllProjects().subscribe(
      data => {
        this.ELEMENT_DATA = data,
          console.log(this.ELEMENT_DATA);
      }
    )
  }
  displayedColumns: string[] = ['title', 'desc', 'ownerId', 'startAt', 'endAt', 'action'];
  dataSource = this.ELEMENT_DATA;
}
