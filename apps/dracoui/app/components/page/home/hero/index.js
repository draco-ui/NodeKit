import DOMPurify from 'dompurify';
import { assert } from '@ember/debug';
import Component from '@glimmer/component';
import { htmlSafe } from '@ember/template';

export default class PageHomeHeroComponent extends Component {
  get title() {
    const { title } = this.args;

    assert(
      '@title for "Page::Home::Hero" must have a valid value',
      title
    );

    return title;
  }

  get description() {
    const { description } = this.args;

    assert(
      '@description for "Page::Home::Hero" must have a valid value',
      description
    );

    if (description) {
      const sanitizedDescription = DOMPurify.sanitize(description);
      return htmlSafe(sanitizedDescription);
    } else {
      return '';
    }
  }
}
