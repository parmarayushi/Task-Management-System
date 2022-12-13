import { Component, Input, OnInit } from '@angular/core';
import { Employees } from 'src/app/employees/employee.model';
import { Projects } from 'src/app/projects/project.model';
import { Task } from 'src/app/tasks/task.model';

@Component({
  selector: 'app-dashboard-presentation',
  templateUrl: './dashboard-presentation.component.html'
})
export class DashboardPresentationComponent implements OnInit {

  /**
  * @name totalEmployees
  * @description sets the data of employees.
  */
  @Input() public set totalEmployee(value: Employees[] | null) {
    if (value) {
      this._employees = value
    }
  }

  /**
  * @name totalEmployees
  * @description gets the data of employees.
  */
  public get totalEmployees(): Employees[] {
    return this._employees;
  }

  /**
  * @name totalProjects
  * @description sets the data of projects.
  */
  @Input() public set totalProjects(value: Projects[] | null) {
    if (value) {
      this._projects = value
    }
  }

  /**
  * @name totalProjects
  * @description gets the data of projects.
  */
  public get totalProjects(): Projects[] {
    return this._projects;
  }

  /**
  * @name totalTasks
  * @description sets the data of tasks.
  */
  @Input() public set totalTasks(value: Task[] | null) {
    if (value) {
      this._tasks = value
      this.status();
    }
  }

  /**
  * @name totalTasks
  * @description gets the data of the tasks.
  */
  public get totalTasks(): Task[] {
    return this._tasks
  }

  public pending: Task[];
  public inProgress: Task[];
  public done: Task[];

  private _employees: Employees[];
  private _projects: Projects[];
  private _tasks: Task[];

  constructor() { }

  ngOnInit(): void {
  }

  /**
  * @name status
  * @description filters the task with Pending, In Progress and Done .
  */
  public status() {
    this.pending = this._tasks.filter((res) => res.status === "Pending");
    this.inProgress = this._tasks.filter((res) => res.status === "In Progress");
    this.done = this._tasks.filter((res) => res.status === "Done");
  }

}
