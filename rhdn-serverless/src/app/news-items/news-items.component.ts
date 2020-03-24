import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { NewsItem } from '../news-item';
import { NewsItemService } from '../news-item.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-news-items',
  templateUrl: './news-items.component.html',
  styleUrls: ['./news-items.component.scss']
})
export class NewsItemsComponent implements OnInit {
  newsItems: NewsItem[];


  constructor(
    private route: ActivatedRoute,
    private messageService: MessageService,
    private newsItemService: NewsItemService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getNewsItems();
  }

  getNewsItems(): void {
    this.newsItemService.getNewsItems()
    .subscribe(newsItems => this.newsItems = newsItems);
  }

}
