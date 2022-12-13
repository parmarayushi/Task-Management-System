import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Employees } from 'src/app/employees/employee.model';
import { Projects } from 'src/app/projects/project.model';
import { CommonService } from 'src/app/shared/services/common.service';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form-container',
  templateUrl: './task-form-container.component.html'
})
export class TaskFormContainerComponent implements OnInit {

  public id: number;
  public taskData$: Observable<Task>;
  public memberData$: Observable<Employees[]>;
  public projectData$: Observable<Projects[]>;

  constructor(
    private commonService: CommonService,
    private taskService: TaskService,
    private route: Router,
    private activatedRoute:ActivatedRoute
  ) {
    this.taskData$ = new Observable();
    this.memberData$ = new Observable();
    this.projectData$ = new Observable();

    this.id=(this.activatedRoute.snapshot.params['id']);
    if(this.id){
      this.taskData$=this.taskService.getTaskById(this.id);
    }
  }

  ngOnInit(): void {
    this.getMembers();
    this.getProjects();
  }

  /**
  * @name getMembers
  * @description calls the method from coomonservice.
  */
  public getMembers() {
    this.memberData$ = this.commonService.getEmployees();
  }

  /**
  * @name getProjects
  * @description calls the method from commonservice.
  */
  public getProjects() {
    this.projectData$ = this.commonService.getProjects();
  }

  /**
  * @name addTask
  * @param form 
  * @description calls the method from taskservice and subscribes it.
  */
  public addTask(form: Task) {
    this.taskService.addTask(form).subscribe(() => {
      setTimeout(() => {
        this.route.navigateByUrl('task')
      }, 2000);
    })
  }

  /**
  * @name editTask
  * @param form 
  * @description calls the mrthod from taskservice and subscribes it.
  */
  public editTask(form:Task){
    this.taskService.editTask(this.id,form).subscribe(()=>{
      setTimeout(() => {
        this.route.navigateByUrl('task')
      }, 2000);
    })
  }
}
