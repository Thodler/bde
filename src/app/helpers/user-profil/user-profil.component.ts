import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../_services/user.service";
import {User} from "../../../_models/User";

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.scss'],
})
export class UserProfilComponent implements OnInit {

  user!: User
  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userRandom();
  }

  userRandom()
  {
    const random = Math.floor(Math.random() * this.userService.users.length-1);
    this.user = this.userService.getUsers()[random];
  }
}
