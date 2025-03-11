import Controller from '@ember/controller';
import { later, scheduleOnce } from '@ember/runloop';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service router;
  @service colorScheme;

  boundRouteDidChange = this.handleRouteDidChange.bind(this);

  constructor() {
    super(...arguments);
    this.router.on('routeDidChange', this.boundRouteDidChange);
  }

  willDestroy() {
    super.willDestroy(...arguments);
    this.router.off('routeDidChange', this.boundRouteDidChange);
  }

  handleRouteDidChange() {
    scheduleOnce('afterRender', this, this.scrollToId);
  }

  @action
  scrollToId() {
    later(
      this,
      function () {
        const hash = window.location.hash;
        let id = hash ? hash.substring(1) : null;
        if (id) {
          let element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      },
      1
    );
  }

  get isIndex() {
    return this.router.currentRouteName === 'index';
  }

  get currentTopRoute() {
    return this.router.currentURL.split('/')[1];
  }
}
