import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';
import { NewsItem } from './news-item';
import { NEWS_ITEMS } from './mock-news';

@Injectable({
  providedIn: 'root'
})
export class NewsItemService {


  constructor(
    private messageService: MessageService
  ) {}

  getNewsItems(): Observable<NewsItem[]> {
    // TODO: send the message _after_ fetching the news items 
    this.messageService.add('NewsItemService: fetched news items');
    return of(NEWS_ITEMS.sort((a, b) => {return b.id - a.id}));
  }

  getNewsItem(id: number): Observable<NewsItem> {
    // TODO: send the message _after_ fetching the news item 
    this.messageService.add(`NewsItemService: fetched news item id=${id}`);
    return of(NEWS_ITEMS.find(newsItem => newsItem.id === id));
  }
}
