import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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
  constructor(private http: HttpClient) { }
  ngOnInit(): void {

  }
  onSubmit(): void {
    this.http.post(`http://localhost:5000/api/auth/register`, this.user).subscribe(
      (data: any) => {
        console.log(data);
      },
      err => console.log(err)
    )
  }
}
