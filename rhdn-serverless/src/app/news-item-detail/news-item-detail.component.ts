import { Component, OnInit, Input  } from '@angular/core';

import { NewsItem } from '../news-item';

@Component({
  selector: 'app-news-item-detail',
  templateUrl: './news-item-detail.component.html',
  styleUrls: ['./news-item-detail.component.scss']
})
export class NewsItemDetailComponent implements OnInit {

  @Input() newsItem: NewsItem;

  constructor() { }

  ngOnInit(): void {
  }

}
