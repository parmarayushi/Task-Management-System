import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Employees } from 'src/app/employees/employee.model';
import { CommonService } from 'src/app/shared/services/common.service';
import { Projects } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-form-container',
  templateUrl: './project-form-container.component.html'
})
export class ProjectFormContainerComponent implements OnInit {

  public projectData$: Observable<Projects>;
  public memberData$: Observable<Employees[]>;
  public id: number;
  constructor(
    private commonService: CommonService,
    private projectService: ProjectService,
    private activatedRoute: ActivatedRoute,
    private _route: Router
  ) {
    this.projectData$ = new Observable();
    this.memberData$ = new Observable();

    this.id = (this.activatedRoute.snapshot.params['id']);
    if (this.id) {
      this.projectData$ = this.projectService.getProjectById(this.id);
    }
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  /**
  * @name getEmployees
  * @description calls the method from commonservice.
  */
  public getEmployees() {
    this.memberData$ = this.commonService.getEmployees();
  }

  /**
  * @name addProjects
  * @param form 
  * @description calls the method from projects service and subscribes it.
  */
  public addProjects(form: Projects) {
    this.projectService.addProject(form).subscribe(() => {
      setTimeout(() => {
        this._route.navigateByUrl('project')
      }, 2000)
    })
  }

  /**
  * @name editProjects
  * @param form 
  * @description calls the method from projects service and subscribes it.
  */
  public editProjects(form: Projects) {
    this.projectService.editProject(this.id, form).subscribe(() => {
      setTimeout(() => {
        this._route.navigateByUrl('project')
      }, 2000)
    })
  }
}
