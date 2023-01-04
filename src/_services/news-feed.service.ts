import { Injectable } from '@angular/core';
import {NewsFeed} from "../_models/NewsFeed";
import {UserService} from "./user.service";

@Injectable({
  providedIn: 'root'
})
export class NewsFeedService {

  newsFeed: NewsFeed[] = [
    {
      id:1,
      title: "Nouvelle loi sur le travail en France",
      author: this.userService.getUser(2)!,
      description: "Le gouvernement a annoncé de nouvelles mesures concernant les droits des travailleurs. Les détails de cette loi seront présentés lors d'une conférence de presse demain.",
      createdAt: new Date("2022-05-18"),
      picture: "https://www.example.com/images/new_work_law.jpg",
    },
    {
      id:2,
      title: "Inondations dans le sud de la France",
      author: this.userService.getUser(3)!,
      description: "Des pluies torrentielles ont causé des inondations dans plusieurs régions du sud de la France. Des équipes de secours sont sur place pour aider les personnes touchées par ces intempéries.",
      createdAt: new Date("2022-09-02"),
      picture: "https://www.example.com/images/floods.jpg",
    },
    {
      id:3,
      title: "Exposition de peinture contemporaine à Paris",
      author: this.userService.getUser(2)!,
      description: "Une exposition de peinture contemporaine a lieu actuellement à la galerie d'art moderne de Paris. Plusieurs artistes de renom y participent, cette exposition est à ne pas manquer.",
      createdAt: new Date("2022-01-15"),
      picture: "https://www.example.com/images/contemporary_painting_exhibition.jpg"
    },
    {
      id:4,
      title: "Lancement du nouveau smartphone de la marque XYZ",
      author: this.userService.getUser(4)!,
      description: "La marque XYZ a annoncé hier soir le lancement de son nouveau smartphone haut de gamme. Ce dernier sera disponible en précommande dès demain sur leur site internet.",
      createdAt: new Date("2022-03-10"),
      picture: "https://www.example.com/images/new_smartphone.jpg"
    },
    {
      id:5,
      title: "Match de football : France vs Italie",
      author: this.userService.getUser(1)!,
      description: "La France affrontera l'Italie ce soir à 21h00 dans le cadre de la ligue des nations. Un match à suivre en direct sur les chaînes de télévision sportives.",
      createdAt: new Date("2022-09-06"),
      picture: "https://www.example.com/images/france_italy_football_match.jpg"
    }
  ]
  constructor(private userService: UserService) { }

  getNewsFeed(): NewsFeed[]
  {
    return this.newsFeed
  }

  getNewsFeedById(id:number): NewsFeed | null
  {
    for (const news of this.newsFeed) {
      if (news.id === id)  return news
    }
    return null
  }

  createNews(data: NewsFeed)
  {
    let maxId = this.newsFeed.reduce((prev, current) => (prev.id > current.id) ? prev : current).id;
    data.id = ++maxId;
    this.newsFeed.unshift(data);
  }
}
