import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router: Router) { }

  saveToken(token: string, role: string, _id: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('ROLE', role);
    localStorage.setItem('id', _id);
    this.router.navigate(['']);
  }

  isLogged(): boolean {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('ROLE');
    // const user = localStorage.getItem('user');
    return !!token && role === 'ROLE_ADMIN';
  }

  clearToken(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('ROLE');
    this.router.navigate(['/auth']);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  getId() {
    return localStorage.getItem('id');
  }
}
