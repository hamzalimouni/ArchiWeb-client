import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IDataUser } from 'src/app/_interfaces/user';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-users-index',
  templateUrl: './users-index.component.html',
  styleUrls: ['./users-index.component.css']
})
export class UsersIndexComponent implements OnInit {
  ELEMENT_DATA: IDataUser[] = [];
  constructor(private userService: UserService, private router: Router) { }
  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      users => this.ELEMENT_DATA = users,
      err => console.log(err),
    )
  }
  displayedColumns: string[] = ['firstname', 'lastname', 'username', 'email', 'role', 'createdAt', 'action'];
  dataSource = this.ELEMENT_DATA;

  delete(id: string) {
    this.userService.deleteUser(id).subscribe(
      data => {
        console.log(data);
        this.ngOnInit();
      },
      err => console.log(err),
    )
  }
}
