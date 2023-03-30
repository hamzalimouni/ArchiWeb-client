import { Component, OnInit } from '@angular/core';
import { IDataProject } from 'src/app/_interfaces/project';
import { ProjectService } from 'src/app/_services/project.service';
import { TokenService } from 'src/app/_services/token.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  ELEMENT_DATA: IDataProject[] = [];

  constructor(private projectService: ProjectService, private tokenService: TokenService) { }
  ngOnInit(): void {
    let id = this.tokenService.getId();
    this.projectService.getOwnerProjects(id).subscribe(
      data => this.ELEMENT_DATA = data,
      err => console.log(err)
    )
  }
  displayedColumns: string[] = ['title', 'desc', 'ownerId', 'startAt', 'endAt', 'action'];
  dataSource = this.ELEMENT_DATA;
  delete(id: string) {
    this.projectService.deleteProject(id).subscribe(
      data => {
        console.log(data);
        this.ngOnInit();
      },
      err => console.log(err)
    )
  }
}
