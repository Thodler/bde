import { Component, OnInit, } from '@angular/core';
import { EventService } from 'src/_services/event.service';
import { Event } from '../../../_models/Event';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit {

  events!: Event[]

  constructor(
    private eventService: EventService,
  ) { }

  ngOnInit() {
    this.events = this.eventService.getEvents(); 
    
  }

  subscribeEvent(){
    
  }


}
