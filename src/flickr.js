import {HttpClient} from 'aurelia-http-client';

  var ui, it, tm;
  var url = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json';

export class Flickr {
  
  //document.top();

  static inject() { return [HttpClient]; }
  
  constructor(http) {
    this.heading = 'Flickr Images';
    this.images = [];
    this.http = http;
  }

  activate() {
    return this.http.jsonp(url).then(response => {
      this.images = response.content.items;
    });
  }

  submit() {
    //alert(this.imageTags);
    if (this.userIds) { ui = "&ids=" + this.userIds; } else { ui = ""; }
    if (this.imageTags) { it = "&tags=" + this.imageTags; } else { it = ""; }
    if (this.tagMode) { tm = "&tagmode=" + this.tagMode; } else { tm = ""; }
    url = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json' + tm + ui + it;
    //alert(url);
    return this.http.jsonp(url).then(response => {
      this.images = response.content.items;
    });
  }
  /*
  canDeactivate() {
    return confirm('Are you sure you wish to leave this page?');
  }
  */
}