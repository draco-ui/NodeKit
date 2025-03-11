import EmberRouter from '@ember/routing/router';
import config from 'ember-get-config';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about');
  this.route('components', function() {

  });
  this.route('colors');
  this.route('docs');
  this.route('brands');
  this.route('tokens');
  this.route('foundations');

  this.route('error');

  this.route('show', { path: '*path' });

  if (config.environment === 'development') {
    this.route('testing');
  }
});

Router.reopen({
  location: 'hash'
});
