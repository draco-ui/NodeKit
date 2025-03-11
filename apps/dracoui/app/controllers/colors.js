import { action } from '@ember/object';
import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { scheduleOnce } from '@ember/runloop';

import TOKENS_RAW from '@dracoui/primitives/dist/docs/colors/colors.json';

export default class ColorsController extends Controller {
  @service router;

  constructor() {
    super(...arguments);
    this.router.on('routeDidChange', this, this._handleRouteDidChange);
  }

  _handleRouteDidChange() {
    scheduleOnce('afterRender', this, this._scrollToHash);
  }

  _scrollToHash() {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.substr(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  get demoSelectedTab() {
    return parseInt(this.router.currentRoute?.queryParams?.demoSelectedTab ?? 0);
  }

  get colors() {
    const colors = {
      palette: {}
    };

    TOKENS_RAW.forEach((token) => {
      if (token.attributes.category === 'color' && !token.deprecated) {
        if (token.group) {
          const tone = token.path[2].match(/^(\w+)-(\d+)$/)[1];
          if (!colors.palette[tone]) {
            colors.palette[tone] = [];
          }
          colors.palette[tone].push({
            colorName: token.path[2],
            cssVariable: `--${token.name}`,
            value: token.value,
          });
        }
      }
    });

    return colors;
  }

  @action
  async demoUpdateSelectedTabQueryParam(_element, index) {
    const routeQueryParams = this.router.currentRoute?.queryParams ?? {};
    let queryParams = { ...routeQueryParams };
    if (index !== undefined) {
      queryParams.demoSelectedTab = index;
      queryParams.preserveScrollPosition = true;
      await this.router.transitionTo({ queryParams });
    }
  }
}
