import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/_services/user.service';
import {NewsFeedService} from "../../../_services/news-feed.service";

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss'],
})
export class NewsFeedComponent implements OnInit {
  newsFeed: any;

  constructor(
    private newsFeedService: NewsFeedService,
    private userService: UserService,
  ) { }

  ngOnInit() {
    if(
      !this.userService.getUserStorage()
    )
    { 
      localStorage.setItem('currentUser', JSON.stringify(this.userService.getUser(6)));
      location.reload();
    }
    else{      
    this.newsFeed = this.newsFeedService.getNewsFeed()
    }
  }
}
