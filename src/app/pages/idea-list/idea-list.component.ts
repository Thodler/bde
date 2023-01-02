import { Component, OnInit } from '@angular/core';
import { IdeaService } from 'src/_services/idea.service';
import {Idea} from '../../../_models/Idea';

@Component({
  selector: 'app-idea-list',
  templateUrl: './idea-list.component.html',
  styleUrls: ['./idea-list.component.scss'],
})
export class IdeaListComponent implements OnInit {


  ideas!:Idea[]

  constructor(
    private ideaService: IdeaService
  ) { }

  ngOnInit() {
    this.ideas = this.ideaService.getIdeas();
  }

}
