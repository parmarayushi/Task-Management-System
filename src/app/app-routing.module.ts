import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginContainerComponent } from './core/components/login-container/login-container.component';
import { MasterComponent } from './core/components/master/master.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path:"login",component:LoginContainerComponent
  },
  {
    path: "", component: MasterComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "", redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'employee', loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule) },
      { path: 'project', loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule) },
      { path: 'task', loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
