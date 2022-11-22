import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable()
export class ProjectFormPresenterService {

  constructor(private fb:FormBuilder) { }

  /**
  * @name buildForm
  * @returns formGroup
  */
  public buildform() {
    return this.fb.group({
      name: ['',Validators.required],
      status: ['',Validators.required],
      startDate: ['',Validators.required],
      dueDate: ['',Validators.required],
      projectManager: ['',Validators.required],
      teamMembers: ['',Validators.required],
      description: ['',Validators.required]
    })
  }
}
