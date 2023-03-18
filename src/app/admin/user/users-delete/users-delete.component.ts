import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-delete',
  templateUrl: './users-delete.component.html',
  styleUrls: ['./users-delete.component.css']
})
export class UsersDeleteComponent implements OnInit {
  constructor(private activated: ActivatedRoute) { }
  ngOnInit(): void {
    this.activated.params.subscribe(
      (data) => {
        console.log(data);
      }
    )
  }
}
