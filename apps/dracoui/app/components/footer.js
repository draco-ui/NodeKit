import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class Footer extends Component {
  @tracked year = new Date().getFullYear();

  footerItems = [
    { label: 'Accessibility', href: 'index' },
    { label: 'Careers', href: 'components' },
    { label: 'Terms of Use', href: 'https://corinvo.dev/projects?id=draco' },
    { label: 'License', href: 'https://corinvo.dev/projects?id=draco/license' },
    { label: 'Legal', children: [
      {label: 'Cookie Policy', href: 'https://corinvo.dev/projects?id=draco/cookie-policy'}
    ] }
  ];
};
