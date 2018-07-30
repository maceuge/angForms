import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { UserDataService } from '../../services/user-data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: []
})
export class UserListComponent implements OnInit {

  users: Usuario[] = [];

  constructor(private userService: UserDataService) {


    this.users = this.userService.obtainUsers();

   }

  ngOnInit() {
  }

}
