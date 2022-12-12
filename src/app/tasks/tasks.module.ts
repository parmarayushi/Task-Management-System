import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { TaskFormContainerComponent } from './task-form-container/task-form-container.component';
import { TaskListConatinerComponent } from './task-list-conatiner/task-list-conatiner.component';
import { TaskFormPresentationComponent } from './task-form-container/task-form-presentation/task-form-presentation.component';
import { TaskListPresentationComponent } from './task-list-conatiner/task-list-presentation/task-list-presentation.component';
import { SharedModule } from '../shared/shared.module';
import { TaskService } from './task.service';


@NgModule({
  declarations: [
    TasksComponent,
    TaskFormContainerComponent,
    TaskListConatinerComponent,
    TaskFormPresentationComponent,
    TaskListPresentationComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule
  ],
  providers:[
    TaskService
  ]
})
export class TasksModule { }
