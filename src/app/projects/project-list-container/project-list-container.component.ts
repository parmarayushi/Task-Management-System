import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonService } from 'src/app/shared/services/common.service';
import { Projects } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-list-container',
  templateUrl: './project-list-container.component.html'
})
export class ProjectListContainerComponent implements OnInit {

  public projectList$: Observable<Projects[]>
  constructor(
    private commonService: CommonService,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.getProjects();
  }

  /**
  * @name getProjects
  * @description calls the method  from commonservice.
  */
  public getProjects() {
    this.projectList$ = this.commonService.getProjects();
  }

  /**
  * @name deleteProjects
  * @param id 
  * @description calls the method from employeeservice and subscribes it.
  */
  public deleteProjects(id: number) {
    this.projectService.deleteProject(id).subscribe(() => {
      alert('Project Deleted Successfully');
      this.getProjects();
    })
  }
}
