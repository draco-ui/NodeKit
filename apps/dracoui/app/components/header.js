import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { later } from '@ember/runloop';

export default class Header extends Component {
  @service firebase;
  @tracked isFirebaseReady = false;

  navItems = [
    { label: 'About', route: 'about' },
    { label: 'Foundations', route: 'foundations' },
    { label: 'Components', route: 'components' },
    { label: 'Brands', route: 'brands' },
    { label: 'Docs', route: 'docs' },
  ];

  @tracked isAtTop = true;
  @tracked scrollPosition = 0;

  constructor() {
    super(...arguments);
    this.checkFirebaseReady();
  }

  checkFirebaseReady() {
    if (this.firebase && this.firebase.isRemoteConfigReady) {
      this.isFirebaseReady = true;
    } else {
      later(this, this.checkFirebaseReady, 500);
    }
  }

  get developerLoginEnabled() {
    if (this.firebase && this.firebase.isRemoteConfigReady) {
      return this.firebase.getCorinvoDeveloperLoginValue();
    } else {
      return false;
    }
  }

  @action
  updateScrollPosition(scrollY) {
    this.scrollPosition = scrollY;
    this.isAtTop = scrollY <= 0;
  }
}
