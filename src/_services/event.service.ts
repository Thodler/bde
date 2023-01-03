import { Injectable } from '@angular/core';
import { Event } from '../_models/Event';
import { UserService } from 'src/_services/user.service';


@Injectable({
  providedIn: 'root'
})
export class EventService {


  events:Event[] = [
    {
      id: 1,
      date: new Date ('202201-01'),
      title: 'Nouvel An',
      description: 'Fête du Nouvel An avec feux d\'artifice et célébrations dans la ville',
      subscribe: [this.userService.getUser(4)!,this.userService.getUser(1)!,this.userService.getUser(3)!],
      author: this.userService.getUser(4)!,
      location: 'Paris, France'
    },
    {
      id: 2,
      date: new Date ('2022-04-01'),
      title: 'Poisson d\'Avril',
      description: 'Fête traditionnelle avec des blagues et des farces',
      subscribe: [this.userService.getUser(4)!,this.userService.getUser(1)!,this.userService.getUser(3)!],
      author: this.userService.getUser(1)!,
      location: 'Marseille, France'
    },
    {
      id: 3,
      date: new Date ('2022-05-08'),
      title: 'Journée de la Victoire',
      description: 'Commémoration de la fin de la Seconde Guerre mondiale',
      subscribe: [this.userService.getUser(5)!,this.userService.getUser(2)!,this.userService.getUser(3)!],
      author: this.userService.getUser(2)!,
      location: 'Lyon, France'
    },
    {
      id: 4,
      date: new Date ('2022-05-30'),
      title: 'Fête des Mères',
      description: 'Célébration de l\'amour et de l\'appréciation des mères',
      subscribe: [this.userService.getUser(4)!,this.userService.getUser(1)!,this.userService.getUser(3)!],
      author: this.userService.getUser(5)!,
      location: 'Toulouse, France'
    },
    {
      id: 5,
      date: new Date ('2022-07-14'),
      title: 'Fête Nationale',
      description: 'Célébration de la Révolution française avec des feux d\'artifice et des défilés',
      subscribe: [this.userService.getUser(5)!,this.userService.getUser(2)!,this.userService.getUser(3)!],
      author: this.userService.getUser(3)!,
      location: 'Nice, France'
    },
    {
      id: 6,
      date: new Date ('2022-09-22'),
      title: 'Journée de l\'Automne',
      description: 'Célébration de la transition vers l\'automne avec des activités en plein air et de la nourriture',
      subscribe: [this.userService.getUser(4)!,this.userService.getUser(1)!,this.userService.getUser(3)!],
      author:this.userService.getUser(5)!,
      location: 'Bordeaux, France'
    },
    {
      id: 7,
      date: new Date ('2022-10-31'),
      title: 'Halloween',
      description: 'Fête où les gens se déguisent et se divertissent',
      subscribe:[this.userService.getUser(5)!,this.userService.getUser(2)!,this.userService.getUser(3)!],
      author: this.userService.getUser(1)!,
      location: 'Lille, France'
    },
    {
      id: 8,
      date: new Date ('2022-11-01'),
      title: 'La Toussaint',
      description: 'Commémoration des défunts avec des visites au cimetière et des cérémonies religieuses',
      subscribe: [this.userService.getUser(5)!,this.userService.getUser(2)!,this.userService.getUser(3)!],
      author: this.userService.getUser(2)!,
      location: 'Grenoble, France'
    },
    {
      id: 9,
      date: new Date ('2022-12-25'),
      title: 'Noël',
      description: 'Célébration de la naissance de Jésus avec des cadeaux, de la nourriture et de la famille',
      subscribe: [this.userService.getUser(4)!,this.userService.getUser(1)!,this.userService.getUser(3)!],
      author: this.userService.getUser(3)!,
      location: 'Nantes, France'
    },
    {
      id: 10,
      date: new Date ('2022-12-31'),
      title: 'Réveillon du Nouvel An',
      description: 'Fête de fin d\'année avec des feux d\'artifice et de la musique pour célébrer l\'arrivée de la nouvelle année',
      subscribe: [this.userService.getUser(5)!,this.userService.getUser(2)!,this.userService.getUser(3)!],
      author: this.userService.getUser(4)!,
      location: 'Rennes, France'
    },
    {
      id: 11,
      date: new Date ('2023-01-01'),
      title: 'Journée de l\'An',
      description: 'Célébration de la nouvelle année avec de la musique et de la danse',
      subscribe: [this.userService.getUser(4)!,this.userService.getUser(1)!,this.userService.getUser(3)!],
      author: this.userService.getUser(5)!,
      location: 'Saint-Etienne, France'
    },
    {
      id: 12,
      date: new Date ('2023-03-17'),
      title: 'Saint-Patrick',
      description: 'Fête célébrant l\'héritage irlandais avec de la musique et de la bière verte',
      subscribe: [this.userService.getUser(4)!,this.userService.getUser(1)!,this.userService.getUser(3)!],
      author: this.userService.getUser(1)!,
      location: 'Montpellier, France'
    },
    {
      id: 13,
      date: new Date ('2023-04-01'),
      title: 'Poisson d\'Avril',
      description: 'Fête traditionnelle avec des blagues et des farces',
      subscribe: [this.userService.getUser(5)!,this.userService.getUser(2)!,this.userService.getUser(3)!],
      author: this.userService.getUser(4)!,
      location: 'Strasbourg, France'
    },
    {
      id: 14,
      date: new Date ('2023-05-08'),
      title: 'Journée de la Victoire',
      description: 'Commémoration de la fin de la Seconde Guerre mondiale',
      subscribe: [this.userService.getUser(4)!,this.userService.getUser(1)!,this.userService.getUser(3)!],
      author: this.userService.getUser(5)!,
      location: 'Toulon, France'
    }
  ];

  constructor(
    private userService: UserService,
  ) { }

    /**
     * méthode de events
     * @returns tous les évènements
     */
  getEvents():Event[] {
    return this.events;
  }

  // récupération d'un élément du tableau
  getOneEvent(id: number):Event | undefined {
    return this.events.find(i => i.id === id);
  }

}