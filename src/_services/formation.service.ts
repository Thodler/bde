import { Injectable } from '@angular/core';
import {Formation} from "../_models/Formation";

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  formations: Formation[] = [
    {'id': 1,'name': 'Informatique', 'school': 'Ajaccio'},
    {'id': 2,'name': 'Gestion des entreprises', 'school': 'Bastia'},
    {'id': 3,'name': 'Sciences politiques', 'school': 'Ajaccio'},
    {'id': 4,'name': 'Droit', 'school': 'Bastia'},
    {'id': 5,'name': 'Littérature', 'school': 'Ajaccio'},
    {'id': 6,'name': 'Sciences de la santé', 'school': 'Bastia'}
  ]

  constructor() { }

  getFormations(): Formation[]
  {
    return this.formations
  }

  getFormationById(id: number): Formation | null
  {
    for (const formation of this.formations) {
      if(formation.id === id )return formation
    }
    return null
  }

}
