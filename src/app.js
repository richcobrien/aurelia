export class App {
	configureRouter(config, router) {
		config.title = 'Aurelia';
		config.map([
			{ route: ['','welcome'], name: 'welcome', moduleId: './welcome', nav: true, title:'Welcome' },
			{ route: 'users',        name: 'users',   moduleId: './users',   nav: true, title:'Github Users' },
			{ route: 'flickr',       name: 'flickr',  moduleId: './flickr',  nav: true, title:'Flickr Images' }
		]);
		this.router = router;
	}
}