import { Component, OnInit } from '@angular/core';
import {NewsFeedService} from "../../../_services/news-feed.service";

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss'],
})
export class NewsFeedComponent implements OnInit {
  newsFeed: any;

  constructor(
    private newsFeedService: NewsFeedService
  ) { }

  ngOnInit() {
    this.newsFeed = this.newsFeedService.getNewsFeed()
  }

}
