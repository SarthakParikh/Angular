import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-role',
  templateUrl: './show-role.component.html',
  styleUrls: ['./show-role.component.css']
})
export class ShowRoleComponent implements OnInit {

  constructor(private routrt:Router) { }

  ngOnInit(): void {
  }

  addRole(){
this.routrt.navigate(['addrole'])
  }

}
