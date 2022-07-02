import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEditRoleComponent } from './add-edit-role/add-edit-role.component';
import { AddEditRoleModuleComponent } from './add-edit-role-module/add-edit-role-module.component';
import { AddEditRolePrivilligesComponent } from './add-edit-role-privilliges/add-edit-role-privilliges.component';
import { AppRoutingModule } from '../add-edit-role-module/app-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AddEditRoleComponent,
    AddEditRoleModuleComponent,
    AddEditRolePrivilligesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule
  ]
})
export class AddEditRoleModuleModule { }
