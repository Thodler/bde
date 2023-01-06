import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/_services/user.service';
import { User } from 'src/_models/User';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

    footerActive!: User | null

  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
    this.footerActive = this.userService.getUserStorage()
  }

}
