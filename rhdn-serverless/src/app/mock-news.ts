import { NewsItem } from './news-item';

export const NEWS_ITEMS: NewsItem[] = [
  { id: 11, date: '2014-10-11', posted_timestamp: new Date(), icon_url: 'https://s3.amazonaws.com/robhughesdotnet/gallery/website/aws_web_services.png', text: 'robhughes.net moves to the cloud!'  },
  { id: 12, date: '2014-10-12', posted_timestamp: new Date(), icon_url: 'https://s3.amazonaws.com/robhughesdotnet/gallery/website/blog.jpg', text: '<p>Check out my Sequoia company blogs <a href="http://blogs.sequoiainc.com/blogs/author/7">here</a>' },
  { id: 13, date: '2015-06-16', posted_timestamp: new Date(), icon_url: 'https://s3.amazonaws.com/robhughesdotnet/gallery/website/blog.jpg', text: "robhughes.net moves to Docker. Works in the development environment...works in production...because it's the SAME web container"  }
];
