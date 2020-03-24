import { Component, OnInit, Input  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { NewsItemService }  from '../news-item.service';

import { NewsItem } from '../news-item';

@Component({
  selector: 'app-news-item-detail',
  templateUrl: './news-item-detail.component.html',
  styleUrls: ['./news-item-detail.component.scss']
})
export class NewsItemDetailComponent implements OnInit {

  @Input() newsItem: NewsItem;


  constructor(
    private route: ActivatedRoute,
    private newsItemService: NewsItemService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getNewsItem();
  }
  
  getNewsItem(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.newsItemService.getNewsItem(id)
      .subscribe(newsItem => this.newsItem = newsItem);
  }

  goBack(): void {
    this.location.back();
  }

}
