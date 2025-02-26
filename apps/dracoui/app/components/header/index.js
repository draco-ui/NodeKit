import Component from '@glimmer/component';

export default class Header extends Component {
  navItems = [
    { label: 'About', route: 'about' },
    { label: 'Foundations', route: 'foundations' },
    { label: 'Components', route: 'components' },
    { label: 'Brands', route: 'brands' },
    { label: 'Colors', route: 'colors' },
    { label: 'Blocks', route: 'blocks' }
  ];
};