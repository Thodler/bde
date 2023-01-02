import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../_services/user.service";
import { User } from "../../../_models/User";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {

  users!: User[];
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getAllUsers();
  }

  handleChange(event: any): void
  {
    const query = event.target.value.toLowerCase();
    this.getAllUsers();

      this.users = this.users.filter(d => {
        const fullName = `${d.firstname} ${d.lastname}`
        return fullName.toLowerCase().indexOf(query) > -1
      });
  }

  getAllUsers(): void
  {
    this.users = this.userService.getUsers();
  }

}
