import { Injectable } from '@angular/core';

import { NewsItem } from './news-item';
import { NEWS_ITEMS } from './mock-news';

@Injectable({
  providedIn: 'root'
})
export class NewsItemService {

  constructor() { }

  ngOnInit() {
    this.getNewsItems();
  }

  getNewsItems(): NewsItem[] {
    return NEWS_ITEMS;
  }

}
