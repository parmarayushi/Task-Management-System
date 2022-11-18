import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from './pipes/search.pipe';
import { DeletePopupComponent } from './components/delete-popup/delete-popup.component';

@NgModule({
  declarations: [
  
    SearchPipe,
       DeletePopupComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SearchPipe
  ]
})
export class SharedModule { }
