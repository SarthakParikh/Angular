import { Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { AddEditRolePrivilligesComponent } from '../add-edit-role-privilliges/add-edit-role-privilliges.component';

@Component({
  selector: 'app-add-edit-role-module',
  templateUrl: './add-edit-role-module.component.html',
  styleUrls: ['./add-edit-role-module.component.css']
})
export class AddEditRoleModuleComponent implements OnInit {

  @Input() moduleID:any;

  @Output() deleteButtonClick = new EventEmitter()
  constructor() { }

  @ViewChild('pattern',{ read:ViewContainerRef}) pattern!:ViewContainerRef
  ngOnInit(): void {
  }


  onAddPrivilligesButtonClicked(){
    const privilliges = this.pattern.createComponent(AddEditRolePrivilligesComponent)
  }
  deleteModule(){
  let  id = this.moduleID
    this.deleteButtonClick.emit(id)
  }
}
