import { LitElement, html, unsafeCSS } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';

import styles from './draco-tab.scss?inline';

@customElement('draco-tab')
export class DracoTab extends LitElement {
  static styles = unsafeCSS(styles);

  @property({ type: Boolean, reflect: true })
  active = false;

  @property({ type: Boolean, reflect: true })
  disabled = false;

  public override focus(options?: FocusOptions): void {
    this.shadowRoot?.querySelector('button')?.focus(options);
  }

  private _handleClick(): void {
    if (this.disabled) return;
    this.dispatchEvent(
      new CustomEvent('draco-tab-select', {
        bubbles: true,
        composed: true,
      }),
    );
  }

  render() {
    const classes = classMap({
      active: this.active,
    });

    return html`
      <button
        role="tab"
        class=${classes}
        aria-selected=${this.active}
        tabindex=${this.active ? 0 : -1}
        ?disabled=${this.disabled}
        @click=${this._handleClick}
      >
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'draco-tab': DracoTab;
  }
}
