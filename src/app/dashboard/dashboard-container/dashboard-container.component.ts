import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employees } from 'src/app/employees/employee.model';
import { Projects } from 'src/app/projects/project.model';
import { CommonService } from 'src/app/shared/services/common.service';
import { Task } from 'src/app/tasks/task.model';
import { TaskService } from 'src/app/tasks/task.service';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html'
})
export class DashboardContainerComponent implements OnInit {

  public employeeData$: Observable<Employees[]>;
  public projectData$: Observable<Projects[]>;
  public taskData$: Observable<Task[]>;

  constructor(
    private commonService: CommonService,
    private taskService: TaskService
  ) {
    this.employeeData$ = new Observable();
    this.projectData$ = new Observable();
    this.taskData$ = new Observable();
  }

  ngOnInit(): void {
    this.props()
  }

  public props(){
    this.employeeData$ = this.commonService.getEmployees();
    this.projectData$ = this.commonService.getProjects();
    this.taskData$ = this.taskService.getTask();
  }
}
