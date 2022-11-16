import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginContainerComponent } from './core/components/login-container/login-container.component';

const routes: Routes = [
  {
    path:"login",component:LoginContainerComponent
  },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
