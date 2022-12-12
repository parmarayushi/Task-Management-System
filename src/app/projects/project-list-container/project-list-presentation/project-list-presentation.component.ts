import { ChangeDetectorRef, ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { UtilitiesService } from 'src/app/shared/services/utilities.service';
import { Projects } from '../../project.model';
import { ProjectListPresenterService } from '../project-list-presenter/project-list-presenter.service';

@Component({
  selector: 'app-project-list-presentation',
  templateUrl: './project-list-presentation.component.html',
  viewProviders: [ProjectListPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectListPresentationComponent implements OnInit {

  /**
  * @name projectList
  * @description sets the list of projects.
  */
  @Input() public set projectList(value: Projects[] | null) {
    if (value) {
      if (!this._newProjectList) {
        this._newProjectList = value
      }
      this._projectList = value;
    }
  }

  /**
  * @name projectList
  * @description gets the list of projects.
  */
  public get projectList(): Projects[] {
    return this._projectList;
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
  public newProjectList: Projects[];

  private _projectList: Projects[];
  private _newProjectList: Projects[];

  constructor(
    private utilityService: UtilitiesService,
    private projectPresenter: ProjectListPresenterService,
    private cdr: ChangeDetectorRef
  ) {
    this.isTableView = false;
    this.isCardView = false;
    this.searchText = "";
    this.delete = new EventEmitter();
  }

  ngOnInit(): void {
    this.onResize(event);

    this.projectPresenter.deleteData$.subscribe((res) => {
      this.delete.emit(res);
    })

    this.utilityService.searchData$.subscribe((res) => {
      this._projectList = res
    })
  }

  /**
  * @name onDelete
  * @param id 
  * @description deletes the on click.
  */
  public onDelete(id: number) {
    this.projectPresenter.deletePopUp(id);
  }

  /**
  * @name onSearch
  * @description searches data from the list.
  */
  public onSearch() {
    this.utilityService.search(this._newProjectList, this.searchText);
  }

  /**
  * @name changePage
  * @param projectList 
  * @description changes the page of list in pagination.
  */
  public changePage(projectList: Projects[]) {
    this.newProjectList = projectList;
    this.cdr.detectChanges();
  }
}
