import { Component, OnInit } from '@angular/core';
import {Idea} from '../../../_models/Idea';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IdeaService } from 'src/_services/idea.service';
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-idea-add',
  templateUrl: './idea-add.component.html',
  styleUrls: ['./idea-add.component.scss'],
})
export class IdeaAddComponent implements OnInit {

  formIdea!: FormGroup;
  ideas!:Idea[]

  constructor(
    private fb: FormBuilder,
    private ideaService: IdeaService,
    private toastController: ToastController
    ) {

   }

  ngOnInit() {
    this.formIdea = this.initForm();
  }

  initForm() {
    return this.fb.group({
      idea:["", Validators.required]
    });
  }

  onSubmit() {
    this.ideaService.addIdea(this.formIdea.value);
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    this.onSubmit();
    this.formIdea = this.initForm();
    const toast = await this.toastController.create({
      message: 'Votre idée a bien été ajouter!',
      duration: 1500,
      position: position
    });

    await toast.present();
  }
}
