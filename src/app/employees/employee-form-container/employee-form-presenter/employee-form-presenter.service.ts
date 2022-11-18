import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { EMAIL_PATTERN, NAME_PATTERN, PASSWORD_PATTERN } from 'src/app/shared/constants';
import { Employees } from '../../employee.model';
import { EmployeeService } from '../../employee.service';

@Injectable()
export class EmployeeFormPresenterService {

  private employeeData: Subject<Employees>;
  public employeeData$: Observable<Employees>;
  constructor(
    private _fb: FormBuilder,
    private employeeService: EmployeeService
  ) {
    this.employeeData = new Subject();
    this.employeeData$ = new Observable();

    this.employeeData$ = this.employeeData.asObservable();
  }

  /**
  * @name buildForm
  * @returns fromGroup
  */
  public buildForm() {
    return this._fb.group({
      firstName: ['', [Validators.required, Validators.pattern(NAME_PATTERN)]],
      lastName: ['', [Validators.required, Validators.pattern(NAME_PATTERN)]],
      city: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.pattern(EMAIL_PATTERN)]],
      password: this._fb.group({
        password: ['', [Validators.required, Validators.pattern(PASSWORD_PATTERN), Validators.minLength(8), Validators.maxLength(12)]],
        confirmPassword: ['', [Validators.required]],
      }, { validator: this.employeeService.confirmPassword }),
    })
  }

  /**
  * @name submitForm
  * @param employeeForm 
  * @description next the value of employeeForm to the presenation.
  */
  public submitForm(employeeForm: FormGroup) {
    this.employeeData.next(employeeForm.value);
  }
}
