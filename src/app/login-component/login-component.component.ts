import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {


  isUserNameValid:boolean = true
  isPasswordValid:boolean = true

  loginFormGroup:FormGroup = new FormGroup({
    userName : new FormControl('',Validators.required),
    userPassword: new FormControl('', Validators.required)
  })

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  loginButtonClicked(){
    if(this.loginFormGroup.valid){
      console.log(this.loginFormGroup.value.userName);
      console.log(this.loginFormGroup.value.userPassword);
      this.isPasswordValid=this.isUserNameValid=true
      console.clear()
      console.log("Sucessful");
this.router.navigate(['showdata'])
      
        
    }
    else{
      if(!this.loginFormGroup.value.userName ){
console.log(!this.loginFormGroup.value.userName);

        this.isUserNameValid = false
        
      }
      if(!this.loginFormGroup.value.userPassword){
        this.isPasswordValid = false
      }
      
    }
    

  }

}
