import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Employees } from 'src/app/employees/employee.model';
import { CommonService } from 'src/app/shared/services/common.service';
import { Projects } from '../project.model';

@Component({
  selector: 'app-project-form-container',
  templateUrl: './project-form-container.component.html'
})
export class ProjectFormContainerComponent implements OnInit {

  public projectData$: Observable<Projects[]>;
  public memberData$: Observable<Employees[]>;
  constructor(
    private commonService: CommonService
  ) {
    this.projectData$ = new Observable();
    this.memberData$ = new Observable();
  }

  ngOnInit(): void {
    this.getEmployees();
    this.getProjects();
  }

  /**
  * @name getEmployees
  * @description calls the method from commonservice.
  */
  public getEmployees() {
    this.memberData$ = this.commonService.getEmployees();
  }

  public getProjects() {
    this.projectData$ = this.commonService.getProjects();
  }
}
