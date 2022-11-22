import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Employees } from 'src/app/employees/employee.model';
import { Projects } from '../../project.model';
import { ProjectFormPresenterService } from '../project-form-presenter/project-form-presenter.service';

@Component({
  selector: 'app-project-form-presentation',
  templateUrl: './project-form-presentation.component.html',
  viewProviders: [ProjectFormPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectFormPresentationComponent implements OnInit {

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

  /**
  * @name teamMembers
  * @description sets the teammembers of employees.
  */
  @Input() public set teamMembers(value: Employees[] | null) {
    if (value) {
      this._teamMembers = value;
    }
  }

  /**
  * @name teamMembers
  * @description gets the teammembers for the employees.
  */
  public get teamMembers(): Employees[] {
    return this._teamMembers;
  }

  public projectForm: FormGroup;
  public formTitle: string;
  public formSubmitted: boolean;
  public settings: {};
  public successMsg: boolean;
  public updateMsg: boolean;
  public expanded: boolean;

  private _projectData: Projects[];
  private _teamMembers: Employees[];

  constructor(private projectFormPresenter: ProjectFormPresenterService) {
    this.projectForm = this.projectFormPresenter.buildform();
    this.formTitle = "New Project";
    this.formSubmitted = false;
    this.successMsg = false;
    this.updateMsg = false;
    this.expanded = false;
  }

  ngOnInit(): void {
    this.settings = {
      singleSelection: false,
      idField: 'id',
      textField: 'firstName',
      selectAllText: 'Select All',
      unSelectAllText: 'Unselect All',
      allowSearchFilter: true,
      searchPlaceholderText: 'Search Here',
      closeDropDownOnSelection: false,
      showSelectedItemsAtTop: false,
      defaultOpen: false,
    }
  }

  /**
  * @name getControls
  * @description gets the controls of projectForm.
  */
  public get getControls() {
    return this.projectForm.controls;
  }
}
