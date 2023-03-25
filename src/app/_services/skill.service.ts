import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDataSkill, ISinglSkill, ISkill } from '../_interfaces/skill';


@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http: HttpClient) { }

  url = `http://localhost:5000/api/skills`;

  getAllSkills(): Observable<IDataSkill[]> {
    return this.http.get<IDataSkill[]>(this.url);
  }

  getSkill(id: string | null): Observable<ISinglSkill> {
    return this.http.get<ISinglSkill>(`${this.url}/find/${id}`);
  }

  postSkill(skill: ISkill) {
    return this.http.post(this.url, skill);
  }

  updateSkill(skill: ISkill) {
    return this.http.put(`${this.url}/${skill._id}`, skill);
  }

  deleteSkill(id: string | null) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
