import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { ShowDataComponentComponent } from './show-data-component/show-data-component.component';
import { ShowRoleComponent } from './show-role/show-role.component';
import { ShowUserComponent } from './show-user/show-user.component';


// angular meterial Imports

import { MatButtonModule } from '@angular/material/button'

@NgModule({
  declarations: [
    NavigationComponent,
    ShowDataComponentComponent,
    ShowRoleComponent,
    ShowUserComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatButtonModule
  ]
})
export class ShowDataModuleModule { }
