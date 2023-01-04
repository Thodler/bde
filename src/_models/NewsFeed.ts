import {User} from "./User";

export interface NewsFeed {
  id: number
  title: string
  author: User
  description: string
  createdAt: Date
  picture: string
}
