import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';


// Angular Meterial Imports


import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import{ MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
