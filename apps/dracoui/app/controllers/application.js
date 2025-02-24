import { action } from '@ember/object';
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service router;
  @service colorScheme;

  constructor() {
    super(...arguments);
    this.router.on('routeDidChange', this.routeDidChange.bind(this));
  }

  willDestroy() {
    super.willDestroy(...arguments);
    this.router.off('routeDidChange', this.routeDidChange.bind(this));
  }

  @action
  routeDidChange() {
    // Handle route change
  }

  get isIndex() {
    return this.router.currentRouteName === 'index';
  }

  get currentTopRoute() {
    return this.router.currentURL.split('/')[1];
  }
}
