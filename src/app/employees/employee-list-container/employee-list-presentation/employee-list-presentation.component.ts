import { ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { UtilitiesService } from 'src/app/shared/services/utilities.service';
import { Employees } from '../../employee.model';
import { EmployeeListPresenterService } from '../employee-list-presenter/employee-list-presenter.service';

@Component({
  selector: 'app-employee-list-presentation',
  templateUrl: './employee-list-presentation.component.html',
  viewProviders: [EmployeeListPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeListPresentationComponent implements OnInit {

  /**
  * @name employeeList
  * @description sets the list of employees.
  */
  @Input() public set employeeList(value: Employees[] | null) {
    if (value) {
      this._employeeList = value;
    }
  }

  /**
  * @name employeeList
  * @description gets the list of employees.
  */
  public get employeeList(): Employees[] {
    return this._employeeList;
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

  private _employeeList: Employees[];

  constructor(private utilityService: UtilitiesService) {
    this.isTableView = false;
    this.isCardView = false;
    this.searchText = "";
    this.delete = new EventEmitter();
  }

  ngOnInit(): void {
    this.onResize(event);

    this.utilityService.searchData$.subscribe((res) => {
      this._employeeList = res
    })
  }

  /**
  * @name onDelete
  * @param id 
  * @description deletes the on click.
  */
  public onDelete(id: number) {
    this.delete.emit(id);
  }

  /**
  * @name onSearch
  * @description searches data from the list.
  */
  public onSearch() {
    this.utilityService.search(this._employeeList, this.searchText);
  }
}
