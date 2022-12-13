import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { UtilitiesService } from 'src/app/shared/services/utilities.service';
import { Task } from '../../task.model';
import { TaskListPresenterService } from '../task-list-presenter/task-list-presenter.service';

@Component({
  selector: 'app-task-list-presentation',
  templateUrl: './task-list-presentation.component.html',
  viewProviders: [TaskListPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskListPresentationComponent implements OnInit {

  /**
  * @name taskList
  * @description sets the list of Task.
  */
  @Input() public set taskList(value: Task[] | null) {
    if (value) {
      if (!this._newTaskList) {
        this._newTaskList = value;
      }
      this._taskList = value;
    }
  }

  /**
  * @name taskList
  * @description gets the list of task.
  */
  public get taskList(): Task[] {
    return this._taskList;
  }

  @Output() public delete: EventEmitter<number>;

  /**
  * @name onResize
  * @param event 
  * @description manipulate the views on the screen size.
  */
  @HostListener('window:resize', ['$event'])
  public onResize(event: any) {
    this.innerWidth = window.innerWidth;
    this.innerWidth >= 576 ? (this.isTableView = true, this.isCardView = false) : (this.isTableView = false, this.isCardView = true);
  }

  public isTableView: boolean;
  public isCardView: boolean;
  public innerWidth: number;
  public searchText: string;
  public newTaskList: Task[];

  private _taskList: Task[];
  private _newTaskList: Task[];

  constructor(
    private taskListPresenter: TaskListPresenterService,
    private utilityService: UtilitiesService,
    private cdr: ChangeDetectorRef
  ) {
    this.isTableView = false;
    this.isCardView = false;
    this.delete = new EventEmitter();
    this.searchText = "";
  }

  ngOnInit(): void {
    this.onResize(event);

    this.taskListPresenter.deleteData$.subscribe((res) => {
      this.delete.emit(res);
    })

    this.utilityService.searchData$.subscribe((res) => {
      this._taskList = res
    })
  }

  /**
  * @name onDelete
  * @param id 
  * @description delete the data on click of button.
  */
  public onDelete(id: number) {
    this.taskListPresenter.deletePopup(id);
  }

  /**
  * @name onSearch
  * @description searches data from the list.
  */
  public onSearch() {
    this.utilityService.search(this._newTaskList, this.searchText);
  }

  /**
  * @name changePage
  * @param taskList 
  * @description changes the page of list in pagination.
  */
  public changePage(taskList: Task[]) {
    this.newTaskList = taskList;
    this.cdr.detectChanges();
  }
}
