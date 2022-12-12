import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Task } from './task.model';

@Injectable()
export class TaskService {

  public apiLink: string;
  constructor(private _http: HttpClient) {
    this.apiLink = environment.baseUrl
  }

  /**
  * @name getTask
  * @returns Observable of type Task.
  */
  public getTask(): Observable<Task[]> {
    return this._http.get<Task[]>(`${this.apiLink}/task`)
  }

  /**
  * @name addTask
  * @param data 
  * @returns Observable of type Task.
  */
  public addTask(data: Task): Observable<Task[]> {
    return this._http.post<Task[]>(`${this.apiLink}/task`, data)
  }

  /**
  * @name getTaskById
  * @param id 
  * @returns Observable of type Task.
  */
  public getTaskById(id: number): Observable<Task> {
    return this._http.get<Task>(`${this.apiLink}/task/${id}`);
  }

  /**
  * @name editTask
  * @param id 
  * @param form 
  * @returns Observable of type Task.
  */
  public editTask(id: number, form: Task): Observable<Task[]> {
    return this._http.put<Task[]>(`${this.apiLink}/task/${id}`, form);
  }

  /**
  * @name deleteTask
  * @param id 
  * @returns Observable of type number.
  */
  public deleteTask(id: number): Observable<number> {
    return this._http.delete<number>(`${this.apiLink}/task/${id}`);
  }
}
