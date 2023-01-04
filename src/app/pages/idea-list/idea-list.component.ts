import { Component, OnInit } from '@angular/core';
import { IdeaService } from 'src/_services/idea.service';
import {Idea} from '../../../_models/Idea';
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-idea-list',
  templateUrl: './idea-list.component.html',
  styleUrls: ['./idea-list.component.scss'],
})
export class IdeaListComponent implements OnInit {


  ideas!:Idea[]

  constructor(
    private ideaService: IdeaService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.ideas = this.ideaService.getIdeas();
  }

  deleteIdea(id: number) {
    this.ideaService.deleteIdea(id);
  }

  async deleteAlert(index: number ) {
    const alert = await this.alertController.create({
      header: 'Etes-vous sur de vouloir supprimer cette idée!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Supprimer',
          cssClass:'{color: red}',
          role: 'confirm',
          handler: () => {
            this.deleteIdea(index);
          },
        },
      ],
    });

    await alert.present();

    await alert.onDidDismiss();
  }
}
