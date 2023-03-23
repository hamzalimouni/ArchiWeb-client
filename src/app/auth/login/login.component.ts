import { Component, OnInit } from '@angular/core';
import { ICredentials } from 'src/app/_interfaces/credentials';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenService } from 'src/app/_services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: ICredentials = {
    username: '',
    password: ''
  }

  constructor(
    private authService: AuthService,
    private tokenService: TokenService
  ) { }
  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.form)
    this.authService.login(this.form).subscribe(
      data => {
        console.log(data.accessToken, data.role);
        this.tokenService.saveToken(data.accessToken, data.role);
      },
      err => console.log(err)
    )
  }
}
