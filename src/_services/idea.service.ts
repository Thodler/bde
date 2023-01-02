import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdeaService {

  private ideas: Idea[] = [
    { idea: "Créer un service de cours en ligne pour apprendre les langues étrangères" },
    { idea: "Lancer une plateforme de location de voitures entre particuliers" },
    { idea: "Ouvrir une école de danse axée sur la pratique de la salsa" },
    { idea: "Concevoir une application de suivi de la consommation d'eau et d'électricité" },
    { idea: "Fonder une agence de voyage axée sur les randonnées en montagne" },
    { idea: "Développer un jeu vidéo de stratégie en temps réel" },
    { idea: "Créer un site de vente en ligne de plantes d'intérieur rares et exotiques" },
    { idea: "Organiser des ateliers de bricolage pour enfants dans les bibliothèques" },
    { idea: "Lancer une plateforme de coaching en ligne pour aider les personnes à atteindre leurs objectifs" },
    { idea: "Développer une application de suivi de l'alimentation et de l'activité physique" }
    ]

    

  constructor() { }

  getIdeas() {
    return this.ideas;
  }
}
