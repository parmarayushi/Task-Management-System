import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { Task } from '../../task.model';

@Injectable()
export class TaskFormPresenterService {

  private taskFormData: Subject<Task>;
  public taskFormData$: Observable<Task>;

  constructor(private _fb: FormBuilder) {
    this.taskFormData = new Subject();
    this.taskFormData$ = new Observable();

    this.taskFormData$ = this.taskFormData.asObservable();
  }

  /**
  * @name buildForm
  * @returns formGroup.
  */
  public buildForm() {
    return this._fb.group({
      projectName: ['', Validators.required],
      task: ['', Validators.required],
      description: ['', Validators.required],
      assignTo: ['', Validators.required],
      priority: ['', Validators.required],
      dueDate: ['', Validators.required],
      status: ['', Validators.required],
    })
  }

  /**
  * @name submitForm
  * @param taskForm 
  * @description next the value of taskForm to the presentation.
  */
  public submitForm(taskForm: FormGroup) {
    this.taskFormData.next(taskForm.value);
  }
}
