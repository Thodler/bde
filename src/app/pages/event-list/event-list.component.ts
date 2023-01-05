import { Component, OnInit, } from '@angular/core';
import { EventService } from 'src/_services/event.service';
import { Event } from '../../../_models/Event';
import {User} from "../../../_models/User";
import {UserService} from "../../../_services/user.service";
import {exit} from "ionicons/icons";


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {

  events!: Event[]
  userCurrent!: User
  colorButton!:string
  textButton!:string

  constructor(
    private eventService: EventService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.events = this.eventService.getEvents();
    this.userCurrent = this.userService.getUserStorage();
    this.colorButton = 'primary'
    this.textButton = 'je participe'
  }

  checkInscription(inscrits: User[]){
    return inscrits.includes(this.userCurrent)
  }
  onSubscribeEvent(inscrits: User[]):void
  {
    if(!this.checkInscription(inscrits)){
      inscrits.push(this.userCurrent)
    }else{
      inscrits.forEach((user:User , index:number )=> {
        if(user.id === this.userCurrent.id){
          inscrits.splice(index, 1)
        }
      })
    }
  }

}
