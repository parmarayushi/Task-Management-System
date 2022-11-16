import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginPresenterService } from '../login-presenter/login-presenter.service';
import { User } from '../login.model';

@Component({
  selector: 'app-login-presentation',
  templateUrl: './login-presentation.component.html'
})
export class LoginPresentationComponent implements OnInit {

  /**
   * @name user
   * @description sets the lsit.
   */
  @Input() public set user(value: User[] | null) {
    if (value) {
      this._user = value;
    }
  }

  /**
   * @name user
   * @description gets the list of user.
   */
  public get user(): User[] {
    return this._user;
  }

  public loginForm: FormGroup;
  public formSubmitted: boolean;

  private _user!: User[];

  constructor(
    public loginService: LoginPresenterService
  ) {
    this.loginForm = this.loginService.buildForm();
    this.formSubmitted = false
  }

  ngOnInit(): void {
  }

  /**
   * @name getControls
   * @returns controls of the loginform.
   */
  public getControls() {
    return this.loginForm.controls;
  }

  /**
   * @name onLogin
   * @description submits the form on click.
   */
  public onLogin() {
    this.formSubmitted = !this.loginForm.valid;
    if (!this.formSubmitted)
      this.loginService.onLogin(this.loginForm, this._user);
      console.log("skdksdm");
      
  }
}
