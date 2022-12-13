import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Employees } from 'src/app/employees/employee.model';
import { Projects } from 'src/app/projects/project.model';
import { Task } from '../../task.model';
import { TaskFormPresenterService } from '../task-form-presenter/task-form-presenter.service';

@Component({
  selector: 'app-task-form-presentation',
  templateUrl: './task-form-presentation.component.html',
  viewProviders: [TaskFormPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskFormPresentationComponent implements OnInit {

  /**
  * @name task
  * @description sets the list of tasks.
  */
  @Input() public set taskData(value: Task | null) {
    if (value) {
      this.formTitle = "Edit Task";
      this.taskForm.patchValue(value);
      this._taskData = value;
    }
  }

  /**
  * @name taskData
  * @description gets the list of tasks.
  */
  public get taskData(): Task {
    return this._taskData;
  }

  /**
  * @name memberData 
  * @description sets the list of employees.
  */
  @Input() public set memberData(value: Employees[] | null) {
    if (value) {
      this._memberData = value;
    }
  }

  /**
  * @name memberData
  * @description gets the list of employees.
  */
  public get memberData(): Employees[] {
    return this._memberData;
  }

  /**
  * @name projectData
  * @description sets the list of projects.
  */
  @Input() public set projectData(value: Projects[] | null) {
    if (value) {
      this._projectData = value;
    }
  }

  /**
  * @name projectData
  * @description gets the list of projects.
  */
  public get projectData(): Projects[] {
    return this._projectData;
  }

  @Output() public add: EventEmitter<Task>;
  @Output() public edit: EventEmitter<Task>;

  public taskForm: FormGroup;
  public formSubmitted: boolean;
  public formTitle: string;
  public successMsg: boolean;
  public updateMsg: boolean;

  private _taskData: Task;
  private _memberData: Employees[];
  private _projectData: Projects[];

  constructor(private taskFormPresenter: TaskFormPresenterService) {
    this.taskForm = this.taskFormPresenter.buildForm();
    this.formSubmitted = false;
    this.formTitle = "New Task";
    this.successMsg = false;
    this.updateMsg = false;
    this.add = new EventEmitter();
    this.edit = new EventEmitter();
  }

  ngOnInit(): void {
    this.taskFormPresenter.taskFormData$.subscribe((res) => {
      this.formTitle === "New Task" ? this.add.emit(res) : this.edit.emit(res)
    })
  }

  /**
  * @name getControls
  * @description gets the controls of taskForm.
  */
  public get getControls() {
    return this.taskForm.controls;
  }

  /**
  * @name onSubmit
  * @description submits the form on click of button.
  */
  public onSubmit() {
    this.formSubmitted = !this.taskForm.valid;
    if (!this.formSubmitted) {
      this.taskFormPresenter.submitForm(this.taskForm);
      if (this.formTitle == "New Task") {
        this.successMsg = true
      } else {
        this.updateMsg = true
      }
    }
  }
}
