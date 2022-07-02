import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditRoleModuleComponent } from './add-edit-role-module.component';

describe('AddEditRoleModuleComponent', () => {
  let component: AddEditRoleModuleComponent;
  let fixture: ComponentFixture<AddEditRoleModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditRoleModuleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditRoleModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
