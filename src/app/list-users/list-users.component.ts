import { Component } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {
  constructor(private userDataService: UserDataService){}

  get users(){
    return this.userDataService.getUsers();
  }
}
