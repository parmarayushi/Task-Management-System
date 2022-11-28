import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Projects } from '../../project.model';

@Injectable()
export class ProjectFormPresenterService {

  private projectData: Subject<Projects>;
  public projectData$: Observable<Projects>;
  constructor(private fb: FormBuilder) {
    this.projectData = new Subject();
    this.projectData$ = new Observable();

    this.projectData$ = this.projectData.asObservable();
  }

  /**
  * @name buildForm
  * @returns formGroup
  */
  public buildform() {
    return this.fb.group({
      name: ['', Validators.required],
      status: ['', Validators.required],
      startDate: ['', Validators.required],
      dueDate: ['', Validators.required],
      projectManager: ['', Validators.required],
      teamMembers: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

  /**
   * @name submitForm
   * @param projectForm 
   * @description next the value of projectForm to the presentation.
   */
  public submitForm(projectForm: FormGroup) {
    this.projectData.next(projectForm.value)
  }
}
