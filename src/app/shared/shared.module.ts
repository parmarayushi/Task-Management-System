import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import { DeletePopupComponent } from './components/delete-popup/delete-popup.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  declarations: [
    SearchPipe,
    DeletePopupComponent,
    PaginationComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SearchPipe,
    PaginationComponent,
    NgMultiSelectDropDownModule
  ]
})
export class SharedModule { }
