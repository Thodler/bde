import {User} from "./User";

export interface Post {
    id: number
    title: string
    description: string
    location: string
    image: string
    author:User
    date: Date
  }