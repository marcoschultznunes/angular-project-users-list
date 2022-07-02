import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  constructor(private fb:FormBuilder, private _usersService:UsersService) { }

  private userPattern = /^.{2,100}$/;

  private usernameValidators = [Validators.required, Validators.pattern(this.userPattern)];
  private ageValidators = [Validators.required];

  userForm = this.fb.group({
    username: ["", this.usernameValidators],
    age: ["", this.ageValidators]
  })

  get username() {
    return this.userForm.get('username');
  }
  get age() {
    return this.userForm.get('age');
  }

  ngOnInit(): void {

  }

  submitHandler() {
    alert("Submit!")
  }
}
