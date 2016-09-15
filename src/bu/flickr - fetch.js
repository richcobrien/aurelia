import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Flickr {
  heading = 'Flickr Images';
  images = [];

  constructor(http) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://api.flickr.com/services/feeds/photos_public.gne?tags=rainier&tagmode=any&format=json');
    });
    this.http = http;
  }

  activate() {
    return this.http.fetch()
      .then(response => response.json())
      .then(images => this.images = response.content.items);
  }

  canDeactivate() {
    return confirm('Are you sure you wish to leave this page?');
  }
}