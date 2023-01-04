import { Component, OnInit,ViewChild  } from '@angular/core';
import { EventService } from 'src/_services/event.service';
import { Event } from '../../../_models/Event';
import { IonContent } from '@ionic/angular';

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
