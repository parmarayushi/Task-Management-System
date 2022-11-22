import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ProjectFormContainerComponent } from './project-form-container/project-form-container.component';
import { ProjectFormPresentationComponent } from './project-form-container/project-form-presentation/project-form-presentation.component';
import { ProjectListContainerComponent } from './project-list-container/project-list-container.component';
import { ProjectListPresentationComponent } from './project-list-container/project-list-presentation/project-list-presentation.component';
import { ProjectViewContainerComponent } from './project-view-container/project-view-container.component';
import { ProjectViewPresentationComponent } from './project-view-container/project-view-presentation/project-view-presentation.component';
import { ProjectService } from './project.service';
import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';


@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectFormContainerComponent,
    ProjectListContainerComponent,
    ProjectFormPresentationComponent,
    ProjectListPresentationComponent,
    ProjectViewContainerComponent,
    ProjectViewPresentationComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SharedModule
  ],
  providers: [
    ProjectService,
  ]
})
export class ProjectsModule { }
