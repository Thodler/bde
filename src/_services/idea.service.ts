import { Injectable } from '@angular/core';
import { Idea } from '../_models/Idea';

@Injectable({
  providedIn: 'root'
})
export class IdeaService {

   ideas: Idea[] = [
    { id:1, idea: "Créer un service de cours en ligne pour apprendre les langues étrangères" },
    { id:2, idea: "Lancer une plateforme de location de voitures entre particuliers" },
    { id:3, idea: "Ouvrir une école de danse axée sur la pratique de la salsa" },
    { id:4, idea: "Concevoir une application de suivi de la consommation d'eau et d'électricité" },
    { id:5, idea: "Fonder une agence de voyage axée sur les randonnées en montagne" },
    { id:6, idea: "Développer un jeu vidéo de stratégie en temps réel" },
    { id:7, idea: "Créer un site de vente en ligne de plantes d'intérieur rares et exotiques" },
    { id:8, idea: "Organiser des ateliers de bricolage pour enfants dans les bibliothèques" },
    { id:9, idea: "Lancer une plateforme de coaching en ligne pour aider les personnes à atteindre leurs objectifs" },
    { id:10, idea: "Développer une application de suivi de l'alimentation et de l'activité physique" }
   ]

  constructor() { }

  // récupération de tout le tableau ideas
  getIdeas():Idea[] {
    return this.ideas;
  }

  // récupération d'un élément du tableau
  getOneIdea(id: number):Idea | undefined {
    return this.ideas.find(i => i.id === id);
  }

  // Ajout d'une nouvelle idée
  addIdea(idea: Idea) {
    const maxId = this.ideas.reduce((prev, current) => (prev.id > current.id) ? prev : current).id;
    idea.id = maxId+1;
    this.ideas.push(idea);
  }


  // Supression d'une idée
  deleteIdea(id: number) {
    this.ideas = this.ideas.filter(i => i.id !== id);
  }
}

