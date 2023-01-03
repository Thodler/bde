import {User} from "./User";

export interface Event {
    title: string
    description: string
    suscribe: User[]
    location: string
    author:User
    date: Date
  }
