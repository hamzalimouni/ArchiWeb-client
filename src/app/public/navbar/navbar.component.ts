import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/_services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  token: any;
  role: any;
  constructor(private tokenService: TokenService) { }
  ngOnInit(): void {
    this.token = localStorage.getItem('ROLE');
    if (this.token === 'ROLE_ADMIN') {
      this.role = 'admin';
    }
    else if (this.token === 'ROLE_OWNER') {
      this.role = 'owner';
    }
    else {
      this.role = 'user';
    }
    // this.token === 'ROLE_ADMIN' ? this.role = 'admin' : this.token = 'owner' ? this.role = 'owner' : this.role = 'user';
  }
  logout(): void {
    this.tokenService.clearToken();
  }
}
