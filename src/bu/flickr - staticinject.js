import {HttpClient} from 'aurelia-http-client';

var url = 'https://api.flickr.com/services/feeds/photos_public.gne?tags=rainier&tagmode=any&format=json';

export class Flickr {
  static inject() { return [HttpClient]; }
  constructor(http) {
    this.heading = 'Flickr';
    this.images = [];
    this.http = http;
  }

  activate() {
    return this.http.jsonp(url).then(response => {
      this.images = response.content.items;
    });
  }

  canDeactivate() {
    return confirm('Are you sure you wish to leave this page?');
  }
}