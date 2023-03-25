import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ISingleUser, IUser } from 'src/app/_interfaces/user';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-users-update',
  templateUrl: './users-update.component.html',
  styleUrls: ['./users-update.component.css']
})
export class UsersUpdateComponent implements OnInit {

  user: any = {
    _id: "",
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    role: "",
    createdAt: "",
    updatedAt: "",
  }

  constructor(private activated: ActivatedRoute, private userService: UserService, private router: Router) { }
  ngOnInit(): void {
    let id = this.activated.snapshot.paramMap.get('id');
    console.log(id);
    this.userService.getUser(id).subscribe(
      (data: ISingleUser) => this.user = data,
      err => console.log(err),
    )
  }
  onSubmit(): void {
    this.userService.updateUser(this.user).subscribe(
      data => this.router.navigate(['admin/user']),
      err => console.log(err),
    )
  }
}
