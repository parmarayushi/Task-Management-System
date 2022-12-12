import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employees } from 'src/app/employees/employee.model';
import { Projects } from 'src/app/projects/project.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public apiLink: string;
  constructor(private _http: HttpClient) {
    this.apiLink = environment.baseUrl;
  }

  /**
  * @name getEmployees
  * @returns Observable of type Employees.
  */
  public getEmployees(): Observable<Employees[]> {
    return this._http.get<Employees[]>(`${this.apiLink}/employee`)
  }

  /**
   * @name getProjects
   * @returns Observable of type Projects.
   */
  public getProjects():Observable<Projects[]>{
    return this._http.get<Projects[]>(`${this.apiLink}/project`);
  }
}

