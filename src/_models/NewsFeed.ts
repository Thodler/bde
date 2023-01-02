import {User} from "./User";

export interface NewsFeed {
  title: string
  author: User
  description: string
  createdAt: Date
  picture: string
}
