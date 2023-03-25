import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor(private http: HttpClient) { }

  url = `http://localhost:5000/api/skills`;

  getAllSkills() {
    return this.http.get(this.url);
  }

  getSkill() { }

  postSkill(skill: any) {
    return this.http.post(this.url, skill);
  }

  updateSkill() { }

  deleteSkill(id: string | null) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
