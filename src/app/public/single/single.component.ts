import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISinglProject } from 'src/app/_interfaces/project';
import { ProjectService } from 'src/app/_services/project.service';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {
  project: any = {
    ownerId: "",
    title: "",
    desc: "",
    img: "",
    startAt: "",
    endAt: "",
  }
  img: string = "https://i0.wp.com/www.flutterbeads.com/wp-content/uploads/2022/01/add-image-in-flutter-hero.png?resize=950%2C500&ssl=1";
  constructor(private activatedRoute: ActivatedRoute, private projectService: ProjectService) { }
  ngOnInit(): void {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.projectService.getProject(id).subscribe(
      (data: ISinglProject) => { this.project = data; console.log(data) },
    )
  }
}
