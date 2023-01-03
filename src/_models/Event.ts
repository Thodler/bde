import {User} from "./User";
import {Post} from "./Post";

export interface Event extends Post {
    subscribe: User[]
}
