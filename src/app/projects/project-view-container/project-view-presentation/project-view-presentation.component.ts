import { Component, Input, OnInit } from '@angular/core';
import { Projects } from '../../project.model';

@Component({
  selector: 'app-project-view-presentation',
  templateUrl: './project-view-presentation.component.html'
})
export class ProjectViewPresentationComponent implements OnInit {

  @Input() public set projectView(value: Projects | null) {
    if (value) {
      this._projectView = value
    }
  }

  public get projectView(): Projects {
    return this._projectView;
  }
  constructor() { }

  private _projectView: Projects;
  ngOnInit(): void {
  }

}
