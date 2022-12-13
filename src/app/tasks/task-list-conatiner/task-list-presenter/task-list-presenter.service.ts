import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { DeletePopupComponent } from 'src/app/shared/components/delete-popup/delete-popup.component';

@Injectable()
export class TaskListPresenterService {

  private deleteData: Subject<number>;
  public deleteData$: Observable<number>;

  constructor(private overlay: Overlay) {
    this.deleteData = new Subject();
    this.deleteData$ = new Observable();

    this.deleteData$ = this.deleteData.asObservable();
  }

  /**
  * @name onDelete
  * @param id 
  * @description next the id to the presentation.
  */
  public onDelete(id: number) {
    this.deleteData.next(id);
  }

  /**
  * @name deletePopUp
  * @param id 
  * @description opens the delete popup.
  */
  public deletePopup(id: number) {
    const config = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically()
    })

    const component = new ComponentPortal(DeletePopupComponent);
    const componentRef = config.attach(component);
    componentRef.instance.value.subscribe((res) => {
      if (res) {
        this.onDelete(id);
        config.detach()
      }
      else {
        config.detach()
      }
    })

    config.backdropClick().subscribe(() => {
      config.detach()
    })
  }
}
