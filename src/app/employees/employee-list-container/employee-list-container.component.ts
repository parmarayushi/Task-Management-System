import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CommonService } from 'src/app/shared/services/common.service';
import { Employees } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list-container',
  templateUrl: './employee-list-container.component.html'
})
export class EmployeeListContainerComponent implements OnInit {

  public employeeList$: Observable<Employees[]>
  constructor(
    private commonService: CommonService,
    private employeeService: EmployeeService
  ) { }

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

  /**
  * @name deleteEmployee
  * @param id 
  * @description calls the method from employeeservice and subscribes it.
  */
  public deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      alert('Employee Deleted Successfully');
      this.getEmployees();
    })
  }
}
