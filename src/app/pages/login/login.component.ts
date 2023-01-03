import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  credentialForm!: FormGroup
  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.credentialForm = this.initForm();
  }

  initForm(){
    return this.formBuilder.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]]
    })
  }

  onSubmit() {
    console.log(this.credentialForm)
  }
}
