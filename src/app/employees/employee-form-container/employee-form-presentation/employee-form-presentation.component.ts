import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Employees } from '../../employee.model';
import { EmployeeFormPresenterService } from '../employee-form-presenter/employee-form-presenter.service';

@Component({
  selector: 'app-employee-form-presentation',
  templateUrl: './employee-form-presentation.component.html',
  viewProviders: [EmployeeFormPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormPresentationComponent implements OnInit {

  /**
  * @name employeeData
  * @description sets the list of employees.
  */
  @Input() public set employeeData(value: Employees[] | null) {
    if (value) {
      this.formTitle = "Edit Employee"
      this.employeeForm.patchValue(value);
      this.employeeForm.controls['password'].disable();
      this._employeeData = value;
    }
  }

  /**
  * @name employeeData
  * @description gets the list of employees.
  */
  public get employeeData(): Employees[] {
    return this._employeeData;
  }

  @Output() add: EventEmitter<Employees>;
  @Output() edit: EventEmitter<Employees>;

  public employeeForm: FormGroup;
  public formSubmitted: boolean;
  public formTitle: string;
  public passwordFieldsVisibility = {
    password: 'close',
    confirmPassword: 'close',
  };
  public successMsg: boolean;
  public updateMsg: Boolean;

  private _employeeData: Employees[];

  constructor(private employeePresenter: EmployeeFormPresenterService) {
    this.employeeForm = this.employeePresenter.buildForm();
    this.formSubmitted = false;
    this.formTitle = "New Employee"
    this.successMsg = false;
    this.updateMsg = false;
    this.add = new EventEmitter();
    this.edit = new EventEmitter();
  }

  ngOnInit(): void {
    this.employeePresenter.employeeData$.subscribe((res) => {
      this.formTitle === "New Employee" ? this.add.emit(res) : this.edit.emit(res);
    })
  }

  /**
  * @name getControls
  * @description gets the controls of the form.
  */
  public get getControls() {
    return this.employeeForm.controls;
  }

  /**
  * @name onSubmit
  * @description submits the form on click of button.
  */
  public onSubmit() {
    this.formSubmitted = !this.employeeForm.valid;
    if (!this.formSubmitted) {
      this.employeePresenter.submitForm(this.employeeForm);
      if (this.formTitle == "New Employee") {
        this.successMsg = true
      } else {
        this.updateMsg = true
      }
    }
  }

  /**
  * @name setPasswordVisibility
  * @param passwordField 
  * @param value 
  * @description shows the password on the mouseevents and touchevents.
  */
  public setPasswordVisibility(passwordField: string, value: string) {
    let key = passwordField as keyof typeof this.passwordFieldsVisibility;
    this.passwordFieldsVisibility[key] = value;
  }
}
