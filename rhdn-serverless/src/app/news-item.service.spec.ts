import { TestBed } from '@angular/core/testing';

import { NewsItemService } from './news-item.service';

describe('NewsItemService', () => {
  let service: NewsItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
