import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { EmployeeFormContainerComponent } from './employee-form-container/employee-form-container.component';
import { EmployeeListContainerComponent } from './employee-list-container/employee-list-container.component';
import { EmployeeFormPresentationComponent } from './employee-form-container/employee-form-presentation/employee-form-presentation.component';
import { EmployeeListPresentationComponent } from './employee-list-container/employee-list-presentation/employee-list-presentation.component';
import { EmployeeService } from './employee.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeeFormContainerComponent,
    EmployeeListContainerComponent,
    EmployeeFormPresentationComponent,
    EmployeeListPresentationComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    SharedModule
  ],
  providers:[
    EmployeeService
  ]
})
export class EmployeesModule { }
