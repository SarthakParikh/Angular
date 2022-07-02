import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditRolePrivilligesComponent } from './add-edit-role-privilliges.component';

describe('AddEditRolePrivilligesComponent', () => {
  let component: AddEditRolePrivilligesComponent;
  let fixture: ComponentFixture<AddEditRolePrivilligesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditRolePrivilligesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditRolePrivilligesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
