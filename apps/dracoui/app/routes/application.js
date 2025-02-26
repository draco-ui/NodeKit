import { action } from '@ember/object';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service progress;

  @action loading(transition) {
    this.progress.handle(transition);
    return true;
  }
}