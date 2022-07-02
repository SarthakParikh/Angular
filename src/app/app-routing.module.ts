import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';

const routes: Routes = [
  {
    path:'', component:LoginComponentComponent
  },
  {
    path:'showdata', loadChildren: () => import('./show-data-module/show-data-module.module').then(m => m.ShowDataModuleModule)
  },
  {
    path:'addrole', loadChildren: () => import('./add-edit-role-module/add-edit-role-module.module').then(m => m.AddEditRoleModuleModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
