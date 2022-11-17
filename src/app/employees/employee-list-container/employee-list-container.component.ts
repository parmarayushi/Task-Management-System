import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CommonService } from 'src/app/shared/services/common.service';
import { Employees } from '../employee.model';

@Component({
  selector: 'app-employee-list-container',
  templateUrl: './employee-list-container.component.html'
})
export class EmployeeListContainerComponent implements OnInit {

  public employeeList$: Observable<Employees[]>
  constructor(private commonService: CommonService) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  /**
   * @name getEmployees
   * @description calls the method fom commonservice.
   */
  public getEmployees() {
    this.employeeList$ = this.commonService.getEmployees();
  }

}
