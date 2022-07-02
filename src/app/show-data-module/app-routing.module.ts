import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { ShowRoleComponent } from './show-role/show-role.component';
import { ShowUserComponent } from './show-user/show-user.component';

const routes: Routes = [
  {
    path:'', component:NavigationComponent
  },
  {
    path:'role',
    component:ShowRoleComponent
  },
  {
    path:'user',
    component:ShowUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
