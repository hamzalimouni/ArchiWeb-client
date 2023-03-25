import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDataEnroll, IEnroll, ISinglEnroll } from '../_interfaces/enroll';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:5000/api/enrollements';

  getAllEnrolls(): Observable<IDataEnroll[]> {
    return this.http.get<IDataEnroll[]>(this.url);
  }

  getEnroll(id: string | null): Observable<ISinglEnroll> {
    return this.http.get<ISinglEnroll>(`${this.url}/find/${id}`);
  }

  postEnroll(enroll: IEnroll) {
    return this.http.post(this.url, enroll);
  }

  updateEnroll(enroll: IEnroll) {
    return this.http.put(`${this.url}/${enroll._id}`, enroll);
  }

  delete(id: string | null) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
