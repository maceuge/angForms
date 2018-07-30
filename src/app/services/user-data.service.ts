import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {


  user: Usuario[] = [];

  constructor() { }

  obtainUsers () {
    this.getUser();
    return this.user;
  }

  addUser (user: Usuario) {
    this.user.push(user);
    console.log(this.user);
    this.setUser();
  }

  setUser () {
     localStorage.setItem('user', JSON.stringify(this.user));
  }

  getUser () {
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
    } else {
      return this.user;
    }
  }
  


}
