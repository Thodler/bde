import { Injectable } from '@angular/core';

export const formations: Formation[] = [
  {'id': 1,'name': 'Informatique', 'school': 'Ajaccio'},
  {'id': 2,'name': 'Gestion des entreprises', 'school': 'Bastia'},
  {'id': 3,'name': 'Sciences politiques', 'school': 'Ajaccio'},
  {'id': 4,'name': 'Droit', 'school': 'Bastia'},
  {'id': 5,'name': 'Littérature', 'school': 'Ajaccio'},
  {'id': 6,'name': 'Sciences de la santé', 'school': 'Bastia'}
]

@Injectable({
  providedIn: 'root'
})
export class FormationService {

  constructor() { }
}
