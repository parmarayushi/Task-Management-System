import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { DashboardPresentationComponent } from './dashboard-container/dashboard-presentation/dashboard-presentation.component';
import { TaskService } from '../tasks/task.service';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardContainerComponent,
    DashboardPresentationComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  providers:[
    TaskService
  ]
})
export class DashboardModule { }
