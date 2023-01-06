import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../_services/user.service";
import {User} from "../../../_models/User";

@Component({
  selector: 'app-user-form-profil',
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
    this.user = this.userService.getUserStorage()!
  }

  onLogout()
  {
    localStorage.clear();
    location.href="http://localhost:8100/login"

  }
}
