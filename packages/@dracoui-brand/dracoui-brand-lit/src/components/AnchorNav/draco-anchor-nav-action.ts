import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import styles from './draco-anchor-nav-action.scss?inline';

@customElement('draco-anchor-nav-action')
export class DracoAnchorNavAction extends LitElement {
  static styles = unsafeCSS(styles);

  @property({ reflect: true })
  href = '';

  render() {
    return html`
      <a href=${this.href} class="action">
        <slot></slot>
      </a>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'draco-anchor-nav-action': DracoAnchorNavAction;
  }
}
