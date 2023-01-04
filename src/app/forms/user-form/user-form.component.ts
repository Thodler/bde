import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {PhotoService} from "../../../_services/photo.service";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {

  formUser!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService
  ) { }

  ngOnInit() {}

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}
