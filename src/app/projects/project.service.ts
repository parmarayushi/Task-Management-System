import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Projects } from './project.model';

@Injectable()
export class ProjectService {

  public apiLink: string;
  constructor(private _http: HttpClient) {
    this.apiLink = environment.baseUrl
  }

  /**
  * @name addProjectdata
  * @param data 
  * @returns Observable of type Projects.
  */
  public addProject(data: Projects): Observable<Projects[]> {
    return this._http.post<Projects[]>(`${this.apiLink}/project`, data);
  }

  /**
  * @name getProjectById
  * @param id 
  * @returns Observable of type Projects.
  */
  public getProjectById(id: number): Observable<Projects[]> {
    return this._http.get<Projects[]>(`${this.apiLink}/project/${id}`);
  }

  /**
  * @name editProject
  * @param id 
  * @param form 
  * @returns Observable of type Projects.
  */
  public editProject(id: number, form: Projects): Observable<Projects[]> {
    return this._http.put<Projects[]>(`${this.apiLink}/project/${id}`, form);
  }

  /**
  * @name deleteProject
  * @param id 
  * @returns Observable of type number.
  */
  public deleteProject(id: number): Observable<number> {
    return this._http.delete<number>(`${this.apiLink}/project/${id}`);
  }
}
