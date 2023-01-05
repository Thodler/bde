import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {PhotoService} from "../../../_services/photo.service";
import {User} from "../../../_models/User";
import {UserService} from "../../../_services/user.service";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {

  formUser!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.initForm(this.userService.getUserStorage());
  }

  initForm(user: User){
    this.formUser = this.formBuilder.group({
      firstname: user.firstname,
      lastname: user.lastname,
      username: user.username,
      email: user.email,
      birthday: user.birthday,
      formation: user.formation,
      discord: user.discord,
      password: user.password
    })
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  onSubmit() {
    console.log(this.formUser.value)
  }
}
