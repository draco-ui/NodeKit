import { LitElement, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import styles from './draco-anchor-nav.scss?inline';
import type { DracoAnchorNavLink } from './draco-anchor-nav-link.js';

@customElement('draco-anchor-nav')
export class DracoAnchorNav extends LitElement {
  static styles = unsafeCSS(styles);

  private _links: DracoAnchorNavLink[] = [];

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('keydown', this._onKeydown);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('keydown', this._onKeydown);
  }

  firstUpdated(): void {
    this._assignSlots();
  }

  private _assignSlots(): void {
    const children = Array.from(this.children);
    this._links = [];

    for (const child of children) {
      if (child.tagName === 'DRACO-ANCHOR-NAV-LINK') {
        child.setAttribute('slot', 'link');
        this._links.push(child as DracoAnchorNavLink);
      } else if (child.tagName === 'DRACO-ANCHOR-NAV-ACTION') {
        child.setAttribute('slot', 'action');
      }
    }
  }

  private _onKeydown = (e: KeyboardEvent): void => {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;

    const target = e.target as DracoAnchorNavLink;
    if (!this._links.includes(target)) return;

    e.preventDefault();
    const currentIdx = this._links.indexOf(target);
    let newIdx: number;

    if (e.key === 'ArrowRight') {
      newIdx = (currentIdx + 1) % this._links.length;
    } else {
      newIdx = (currentIdx - 1 + this._links.length) % this._links.length;
    }

    this._links[newIdx]?.focus();
  };

  render() {
    return html`
      <nav>
        <div class="links">
          <slot name="link"></slot>
        </div>
        <slot name="action"></slot>
      </nav>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'draco-anchor-nav': DracoAnchorNav;
  }
}
