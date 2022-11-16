import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginContainerComponent } from './components/login-container/login-container.component';
import { LoginPresentationComponent } from './components/login-container/login-presentation/login-presentation.component';
import { MasterComponent } from './components/master/master.component';
import { SidebarComponent } from './components/master/sidebar/sidebar.component';
import { HeaderComponent } from './components/master/header/header.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LoginContainerComponent,
    LoginPresentationComponent,
    MasterComponent,
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
})
export class CoreModule { }
