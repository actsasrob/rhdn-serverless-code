import { Component, OnInit } from '@angular/core';

import { NewsItem } from '../news-item';
import { NEWS_ITEMS } from '../mock-news';

@Component({
  selector: 'app-news-items',
  templateUrl: './news-items.component.html',
  styleUrls: ['./news-items.component.scss']
})
export class NewsItemsComponent implements OnInit {
  newsItems = NEWS_ITEMS;
  selectedNewsItem: NewsItem;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(newsItem: NewsItem): void {
    this.selectedNewsItem = newsItem;
  }

}
