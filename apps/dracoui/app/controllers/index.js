import Controller from '@ember/controller';

export default class IndexController extends Controller {
  cards = [
    {
      icon: 'material-symbols-light:book-5',
      title: 'Foundations',
      description: 'Design decisions and guidance for colors, icons, typography, and more.',
      route: 'foundations',
    },
    {
      icon: 'ix:about-filled',
      title: 'About',
      description: 'Structured guidelines on tone and voice, user communication, and more.',
      route: 'about',
    },
    {
      icon: 'mynaui:components-solid',
      title: 'Components',
      description: 'Reusable building blocks to speed up your work and focus on your users.',
      route: 'components',
    },
    {
      icon: 'material-symbols:palette-outline',
      title: 'Colors',
      description: 'Guidelines and best practices for consistent and scalable interfaces.',
      route: 'colors',
    },
  ];
}
