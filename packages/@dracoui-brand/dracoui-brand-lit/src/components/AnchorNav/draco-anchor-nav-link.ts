import { LitElement, html, unsafeCSS } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';

import styles from './draco-anchor-nav-link.scss?inline';

@customElement('draco-anchor-nav-link')
export class DracoAnchorNavLink extends LitElement {
  static styles = unsafeCSS(styles);

  @property({ reflect: true })
  href = '';

  @property({ type: Boolean, reflect: true })
  active = false;

  public override focus(options?: FocusOptions): void {
    this.shadowRoot?.querySelector('a')?.focus(options);
  }

  render() {
    const classes = classMap({
      link: true,
      active: this.active,
    });

    return html`
      <a
        href=${this.href}
        class=${classes}
        aria-current=${this.active ? 'true' : 'false'}
        tabindex=${this.active ? 0 : -1}
      >
        <slot></slot>
      </a>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'draco-anchor-nav-link': DracoAnchorNavLink;
  }
}
