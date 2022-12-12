import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskFormContainerComponent } from './task-form-container/task-form-container.component';
import { TaskListConatinerComponent } from './task-list-conatiner/task-list-conatiner.component';

const routes: Routes = [
  { 
    path: '', redirectTo: 'list', pathMatch: 'full' 
  },
  {
    path: '', component: TaskListConatinerComponent
  },
  {
    path: 'add', component: TaskFormContainerComponent
  },
  {
    path: 'edit/:id', component: TaskFormContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
