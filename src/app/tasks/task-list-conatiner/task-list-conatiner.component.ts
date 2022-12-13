import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list-conatiner',
  templateUrl: './task-list-conatiner.component.html'
})
export class TaskListConatinerComponent implements OnInit {

  public taskData$: Observable<Task[]>;

  constructor(private taskService: TaskService) {
    this.taskData$ = new Observable();
  }

  ngOnInit(): void {
    this.getTaskData();
  }

  /**
  * @name getTaskData
  * @description calls the method from taskService.
  */
  public getTaskData() {
    this.taskData$ = this.taskService.getTask();
  }

  /**
  * @name deleteTask
  * @param id 
  * @description calls the method from task service and subscribes it.
  */
  public deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(() => {
      alert("Task deleted Successfully");
      this.getTaskData();
    })
  }
}
