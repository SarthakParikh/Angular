import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditRoleComponent } from './add-edit-role/add-edit-role.component';

const routes: Routes = [
  {
    path:'' , component:AddEditRoleComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
