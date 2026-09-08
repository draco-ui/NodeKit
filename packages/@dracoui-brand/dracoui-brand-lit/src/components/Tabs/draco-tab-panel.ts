import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import styles from './draco-tab-panel.scss?inline';

@customElement('draco-tab-panel')
export class DracoTabPanel extends LitElement {
  static styles = unsafeCSS(styles);

  @property({ type: Boolean, reflect: true })
  active = false;

  render() {
    return html`
      <div role="tabpanel">
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'draco-tab-panel': DracoTabPanel;
  }
}
