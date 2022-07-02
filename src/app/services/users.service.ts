import { Injectable } from '@angular/core';
import IUser from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users:IUser[] = [
    {username: "Marcola", age: 23},
    {username: "Lol", age: 24}
  ];

  addUser(username:string, age:number) {
    this.users.push({username, age});
  };

  constructor() { }
}
