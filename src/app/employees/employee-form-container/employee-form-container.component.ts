import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Employees } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-form-container',
  templateUrl: './employee-form-container.component.html'
})
export class EmployeeFormContainerComponent implements OnInit {

  public employeeData$: Observable<Employees[]>;
  public id:number;
  constructor(
    private employeeService:EmployeeService,
    private _route:Router,
    private activatedRoute:ActivatedRoute
    ) {
    this.employeeData$ = new Observable();
    this.id=parseInt(this.activatedRoute.snapshot.params['id'])
    if(this.id){
      this.employeeData$ = this.employeeService.getEmployeeById(this.id);
    }
  }

  ngOnInit(): void {
  }

  /**
  * @name addEmployee
  * @param form 
  * @description calls the method from the employeeservice and subscribes it.
  */
  public addEmployee(form:Employees){
    this.employeeService.addEmployee(form).subscribe(()=>{
      setTimeout(() => {
        this._route.navigateByUrl('employee')
      }, 2000);
    })
  }

  /**
   * @name editEmployee
   * @param form 
   * @description calls the method from the employeeservice and subscribes it.
   */
  public editEmployee(form:Employees){
    this.employeeService.editEmployee(this.id,form).subscribe(()=>{
      setTimeout(() => {
        this._route.navigateByUrl('employee')
      }, 2000);
    })
  }
}
