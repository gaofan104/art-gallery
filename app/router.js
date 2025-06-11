import EmberRouter from '@ember/routing/router';
import config from 'art-gallery/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home');
  this.route('favorite');
  this.route('history');
  this.route('artwork-details', { path: 'artwork-details/:id' });
});
