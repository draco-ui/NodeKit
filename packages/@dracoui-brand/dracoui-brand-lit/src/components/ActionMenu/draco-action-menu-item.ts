/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import type { DracoActionMenuOverlay } from './draco-action-menu-overlay.js';

import styles from './draco-action-menu-item.scss?inline';

@customElement('draco-action-menu-item')
export class DracoActionMenuItem extends LitElement {
  static styles = unsafeCSS(styles);

  @property({ type: Boolean, reflect: true }) disabled = false;

  private _handleClick() {
    if (this.disabled) return;

    this.dispatchEvent(new CustomEvent('draco-select', {
      bubbles: true,
      composed: true,
    }));

    const overlay = this.closest('draco-action-menu-overlay') as DracoActionMenuOverlay | null;
    overlay?.hide();
  }

  private _handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this._handleClick();
      return;
    }

    const menu = this.closest('draco-action-menu-overlay');
    if (!menu) return;

    const items = Array.from(
      menu.querySelectorAll<DracoActionMenuItem>('draco-action-menu-item:not([disabled])'),
    );
    const currentIndex = items.indexOf(this);

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      items[(currentIndex + 1) % items.length]?.focus();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      items[(currentIndex - 1 + items.length) % items.length]?.focus();
    }
  }

  render() {
    return html`
      <li
        role="menuitem"
        class="item"
        tabindex=${this.disabled ? -1 : 0}
        aria-disabled=${this.disabled || undefined}
        @click=${this._handleClick}
        @keydown=${this._handleKeyDown}
      >
        <slot></slot>
      </li>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'draco-action-menu-item': DracoActionMenuItem;
  }
}
