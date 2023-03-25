import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDataProject, IProject, ISinglProject } from '../_interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  url = 'http://localhost:5000/api/projects';
  constructor(private http: HttpClient) { }

  getAllProjects(): Observable<IDataProject[]> {
    return this.http.get<IDataProject[]>(this.url);
  }

  getProject(id: string | null): Observable<ISinglProject> {
    return this.http.get<ISinglProject>(`${this.url}/find/${id}`);
  }

  postProject(project: IProject) {
    return this.http.post(this.url, project);
  }

  updateProject(project: IProject) {
    return this.http.put(`${this.url}/${project._id}`, project);
  }

  deleteProject(id: string | null) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
