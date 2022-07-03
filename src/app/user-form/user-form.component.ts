import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import IUser from '../models/User';
import { UsersService } from '../services/users.service';
import { ageValidator, usernameValidator } from '../validators/user.validators';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  constructor(private fb:FormBuilder, private _usersService:UsersService) { }

  private usernameValidators = [Validators.required, usernameValidator()];
  private ageValidators = [Validators.required, ageValidator()];

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

  ngOnInit(): void {}

  submitHandler() {
    if(this.userForm.valid){
      const user:IUser = {
        username: this.username?.value.trim(),
        age: Number(this.age?.value.trim())
      }
  
      this._usersService.addUser(user.username, user.age);

      this.userForm.setValue({
        username: "",
        age: ""
      });
      this.userForm.markAsUntouched();
    } else {
      this.userForm.markAllAsTouched();
    }
  }
}
