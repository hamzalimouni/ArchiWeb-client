import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDataUser, ISingleUser } from '../_interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = `http://localhost:5000/api/users`;

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<IDataUser[]> {
    return this.http.get<IDataUser[]>(this.url);
  }

  getUser(id: string | null): Observable<ISingleUser> {
    return this.http.get<ISingleUser>(`${this.url}/find/${id}`);
  }

  deleteUser(id: string | null) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
