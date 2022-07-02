import { Component, OnInit } from '@angular/core';
import IUser from '../models/User';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users:IUser[] = [];

  constructor(private _usersService:UsersService) { }

  ngOnInit(): void {
    this.users = this._usersService.users;
  }
}
