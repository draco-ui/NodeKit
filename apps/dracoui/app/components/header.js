import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Header extends Component {
  navItems = [
    { label: 'About', route: 'about' },
    { label: 'Foundations', route: 'foundations' },
    { label: 'Components', route: 'components' },
    { label: 'Brands', route: 'brands' },
    { label: 'Colors', route: 'colors' },
    { label: 'Blocks', route: 'blocks' }
  ];

  @tracked isAtTop = true;
  @tracked scrollPosition = 0;

  @action
  updateScrollPosition(scrollY) {
    this.scrollPosition = scrollY;
    this.isAtTop = scrollY === 0;
  }
}
