import { Injectable } from '@angular/core';
import {FormationService} from "./formation.service";
import {User} from "../_models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    {
      id: 1,
      firstname: "Marie",
      lastname: "Dupont",
      username: "marie.dupont123",
      image: "https://picsum.photos/200",
      birthday: new Date("1998-03-15"),
      email: "marie.dupont@gmail.com",
      formation: this.formationService.getFormationById(2)!,
      school_location: "Paris, France",
      password: "motdepasse123",
      discord: "Marie#7250",
      roles: ["ROLE_BDE", "ROLE_ETUDIANT"]
    },
    {
      id: 2,
      firstname: "Paul",
      lastname: "Martin",
      username: "paul.martin456",
      image: "https://picsum.photos/200",
      birthday: new Date("1996-09-11"),
      email: "paul.martin@gmail.com",
      formation: this.formationService.getFormationById(6)!,
      school_location: "Lyon, France",
      password: "mdpmdp456",
      discord: "Paul#5430",
      roles: ["ROLE_ETUDIANT"]
    },
    {
      id: 3,
      firstname: "Emma",
      lastname: "Lopez",
      username: "emma.lopez789",
      image: "https://picsum.photos/200",
      birthday: new Date("1999-01-20"),
      email: "emma.lopez@gmail.com",
      formation: this.formationService.getFormationById(2)!,
      school_location: "Madrid, Espagne",
      password: "mdpemma789",
      discord: "Emma#7984",
      roles: ["ROLE_ETUDIANT"]
    },
    {
      id: 4,
      firstname: "Elena",
      lastname: "Sini",
      username: "elena.sini777",
      image: "https://picsum.photos/200",
      birthday: new Date("2014-09-16"),
      email: "emma.lopez@gmail.com",
      formation: this.formationService.getFormationById(1)!,
      school_location: "Ajaccio, Corse",
      password: "password",
      discord: "Elena#7877",
      roles: ["ROLE_ETUDIANT"]
    },
    {
      id: 5,
      firstname: "Livia",
      lastname: "Roccati",
      username: "Zouzette",
      image: "https://picsum.photos/200",
      birthday: new Date("2019-12-23"),
      email: "livia@mail.com",
      formation: this.formationService.getFormationById(2)!,
      school_location: "Ajaccio, Corse",
      password: "mdp",
      discord: "Livia#9593",
      roles: ["ROLE_ETUDIANT"]
    },
    {
      id: 6,
      firstname: "Toto",
      lastname: "Titi",
      username: "Tata",
      image: "https://picsum.photos/200",
      birthday: new Date("1984-11-01"),
      email: "toto@mail.com",
      formation: this.formationService.getFormationById(2)!,
      school_location: "Ajaccio, Corse",
      password: "mdp",
      discord: "Toto#1234",
      roles: ["ROLE_SUPERADMIN"]
    }

  ]

  constructor(
    private formationService: FormationService
  ) { }

  getUsers(): User[]
  {
    return this.users;
  }

  getUser(id: number): User | null
  {
    for (const user of this.users) {
      if (user.id === id) return user
    }
    return null;
  }

  createUsers(data: User): void
  {
    this.users.push(data);
  }

  getUserStorage(): User
  {
    return JSON.parse(localStorage.getItem('currentUser')!);
  }

}
