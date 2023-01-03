import {Formation} from "./Formation";

export interface User {
  id: number
  firstname: string
  lastname: string
  username: string
  image: string
  birthday: Date
  email: string
  formation: Formation
  school_location: string
  password: string
  roles: string[]
}
