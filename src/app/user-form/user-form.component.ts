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
  
  ngOnInit(): void {}

  /* Validators */
  private usernameValidators = [Validators.required, usernameValidator()];
  private ageValidators = [Validators.required, ageValidator()];

  /* The form */
  userForm = this.fb.group({
    username: ["", this.usernameValidators],
    age: ["", this.ageValidators]
  });

  get username() {
    return this.userForm.get('username');
  };
  get age() {
    return this.userForm.get('age');
  };

  /* The submit handler */
  submitHandler() {
    if(this.userForm.valid){  // Submits only if valid
      const user:IUser = {
        username: this.username?.value.trim(),
        age: Number(this.age?.value.trim())
      }
  
      this._usersService.addUser(user.username, user.age);  // Adds the user

      /* Resetting the inputs after submission */
      this.userForm.setValue({
        username: "",
        age: ""
      });
      this.userForm.markAsUntouched();

    } else {  // If form not valid, displays all errors
      this.userForm.markAllAsTouched();
    }
  };
}
