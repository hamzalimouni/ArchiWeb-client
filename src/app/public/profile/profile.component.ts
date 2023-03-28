import { Component, OnInit } from '@angular/core';
import { ISingleUser, IUser } from 'src/app/_interfaces/user';
import { TokenService } from 'src/app/_services/token.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
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
  constructor(private tokenService: TokenService, private userService: UserService) { }
  ngOnInit(): void {
    let id = this.tokenService.getId();
    this.userService.getUser(id).subscribe(
      (data: ISingleUser) => this.user = data,
      err => console.log(err),
    )
  }
  onSubmit(): void {
    this.userService.updateUser(this.user).subscribe(
      data => this.ngOnInit(),
      err => console.log(err),
    )
  }
}
