import { Component, OnInit } from '@angular/core';
import {Idea} from '../../../_models/Idea';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IdeaService } from 'src/_services/idea.service';

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
}
