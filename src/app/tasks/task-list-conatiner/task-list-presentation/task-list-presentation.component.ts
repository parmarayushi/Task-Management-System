import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { TaskListPresenterService } from '../task-list-presenter/task-list-presenter.service';

@Component({
  selector: 'app-task-list-presentation',
  templateUrl: './task-list-presentation.component.html',
  viewProviders:[TaskListPresenterService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TaskListPresentationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
