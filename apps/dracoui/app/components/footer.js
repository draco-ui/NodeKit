import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class Footer extends Component {
  @tracked year = new Date().getFullYear();

  footerItems = [
    { label: 'Home', route: 'index' },
    { label: 'Components', route: 'components' }
  ];
};