import { Component, OnInit } from '@angular/core';

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
  selectedNewsItem: NewsItem;

  constructor(private newsItemService: NewsItemService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getNewsItems();
  }

  onSelect(newsItem: NewsItem): void {
    this.selectedNewsItem = newsItem;
    this.messageService.add(`NewsItemsService: Selected news item id=${newsItem.id}`);
  }

  getNewsItems(): void {
    this.newsItems = this.newsItemService.getNewsItems();
    this.messageService.add('NewsItemsService: fetched news items');
  }

}
