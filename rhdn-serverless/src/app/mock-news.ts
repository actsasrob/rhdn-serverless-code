import { NewsItem } from './news-item';

export const NEWS_ITEMS: NewsItem[] = [
  { id: 11, date: '2014-10-11', posted_timestamp: new Date(), icon_url: 'https://s3.amazonaws.com/robhughesdotnet/gallery/website/aws_web_services.png', text: 'robhughes.net moves to the cloud!'  },
  { id: 12, date: '2014-10-12', posted_timestamp: new Date(), icon_url: 'https://s3.amazonaws.com/robhughesdotnet/gallery/website/blog.jpg', text: '<p>Check out my Sequoia company blogs <a href="http://blogs.sequoiainc.com/blogs/author/7">here</a>' },
  { id: 13, date: '2015-06-16', posted_timestamp: new Date(), icon_url: 'https://s3.amazonaws.com/robhughesdotnet/gallery/website/blog.jpg', text: "robhughes.net moves to Docker. Works in the development environment...works in production...because it's the SAME web container" },
  { id: 14, date: '2016-08-13', posted_timestamp: new Date(), icon_url: 'https://s3.amazonaws.com/robhughesdotnet/gallery/website/capsule.jpg', text: "Updated gallery with photos from recent <a href='https://goo.gl/photos/S67s11K41TrqXW5w7'>Florida Trip 2016</a>" },
  { id: 15, date: '2016-12-23', posted_timestamp: new Date(), icon_url: 'https://s3.amazonaws.com/robhughesdotnet/gallery/website/SysOps-Administrator-Associate.png', text: "Cleared the AWS SysOps Administrator Associate exam!" },
  { id: 16, date: '2017-01-09', posted_timestamp: new Date(), icon_url: 'https://s3.amazonaws.com/robhughesdotnet/gallery/website/Developer-Associate.png', text: "Cleared the AWS SysOps Administrator Associate exam!"  },
  { id: 17, date: '2017-02-10', posted_timestamp: new Date(), icon_url: 'https://s3.amazonaws.com/robhughesdotnet/gallery/website/Solutions-Architect-Associate.png', text: "Renewed AWS Certified Solution Architect Associate certification!" },
  { id: 18, date: '2020-03-25', posted_timestamp: new Date(), icon_url: 'https://s3.amazonaws.com/robhughesdotnet/gallery/website/blog.jpg', text: "robhughes.net goes serverless!" }
];
