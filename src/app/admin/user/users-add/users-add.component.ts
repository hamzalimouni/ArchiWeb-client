import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-users-add',
  templateUrl: './users-add.component.html',
  styleUrls: ['./users-add.component.css']
})
export class UsersAddComponent implements OnInit {
  user: any = {
    _id: "",
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    role: "",
    createdAt: "",
    updatedAt: "",
  }
  constructor(private router: Router, private userService: UserService) { }
  ngOnInit(): void {

  }
  onSubmit(): void {
    this.userService.postUser(this.user).subscribe(
      (data: any) => {
        console.log(data);
        this.router.navigate(['admin/user']);
      },
      err => console.log(err)
    )
  }
}
