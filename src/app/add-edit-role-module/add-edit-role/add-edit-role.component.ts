import { JsonPipe } from '@angular/common';
import { Component, OnInit, ViewChild, ViewContainerRef, ViewRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AddEditRoleModuleModule } from '../add-edit-role-module.module';
import { AddEditRoleModuleComponent } from '../add-edit-role-module/add-edit-role-module.component';

@Component({
  selector: 'app-add-edit-role',
  templateUrl: './add-edit-role.component.html',
  styleUrls: ['./add-edit-role.component.css']
})
export class AddEditRoleComponent implements OnInit {

  roleForm:FormGroup = new FormGroup({
    roleName : new FormControl('',Validators.required),
    roleDes: new FormControl('',Validators.required)
  })

  moduleArray:any[]=[]
  moduleID:number = 1

@ViewChild('module',{read:ViewContainerRef}) moduleComponent!:ViewContainerRef
  constructor(private viewRef:ViewContainerRef) { }

  ngOnInit(): void {
  }
addModule(){
 const moduleData=this.moduleComponent.createComponent(AddEditRoleModuleComponent)

 moduleData.instance.moduleID = this.moduleID

moduleData.instance.deleteButtonClick.subscribe((id:number)=>{
  this.deleteModule(id)
})

 this.moduleArray.push(moduleData)
 this.moduleID=this.moduleID+1
}

saveData(){
  console.log(this.moduleArray);
  

}

isRoleDataValid(){

}

cancelButton(){

}

deleteModule(id:number){

  let modCompRef = this.moduleArray.filter((x: any) => {
    return x.instance.moduleID === id;
  })[0];

  let vcrIndex = this.moduleArray.indexOf(modCompRef);
  this.moduleComponent.remove(vcrIndex);
  for (let i = 0; i < this.moduleArray.length; i++) {
    if (this.moduleArray[i].instance.moduleID === id) {
      this.moduleArray.splice(i, 1);
    }
  }


}

}
