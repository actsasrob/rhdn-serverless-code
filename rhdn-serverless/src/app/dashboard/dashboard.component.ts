import { Component, OnInit } from '@angular/core';
import { NewsItem } from '../news-item';
import { NewsItemService } from '../news-item.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  newsItems: NewsItem[] = [];

  constructor(private newsItemService: NewsItemService) { }

  ngOnInit() {
    this.getNewsItems();
  }

  getNewsItems(): void {
    this.newsItemService.getNewsItems()
      .subscribe(newsItems => this.newsItems = newsItems.slice(1, 5));
  }
}
