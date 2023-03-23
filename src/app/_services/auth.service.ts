import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICredentials } from '../_interfaces/credentials';
import { IToken } from '../_interfaces/token';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = `http://localhost:5000/api/auth/login`;
  constructor(private http: HttpClient) { }

  login(credentials: ICredentials): Observable<IToken> {
    return this.http.post<IToken>(this.url, credentials);
  }
}
