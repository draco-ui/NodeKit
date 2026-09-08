/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html, unsafeCSS } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query } from 'lit/decorators.js';

import type { DracoActionMenu } from './draco-action-menu.js';
import type { DracoActionMenuTrigger } from './draco-action-menu-trigger.js';

import styles from './draco-action-menu-overlay.scss?inline';

@customElement('draco-action-menu-overlay')
export class DracoActionMenuOverlay extends LitElement {
  static styles = unsafeCSS(styles);

  // — Appearance —
  @property({ type: Boolean, reflect: true })
  depth: boolean = true;

  // — DOM refs —
  @query('.popover') private _popoverEl!: HTMLDivElement;

  firstUpdated() {
    if (this._popoverEl) {
      this._popoverEl.setAttribute('popover', 'auto');
      this._popoverEl.addEventListener('toggle', this._handleToggle);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._popoverEl?.removeEventListener('toggle', this._handleToggle);
  }

  private _handleToggle = (e: Event) => {
    const { newState } = e as ToggleEvent;
    const isOpen = newState === 'open';

    const menu = this.closest('draco-action-menu') as DracoActionMenu | null;
    if (menu) {
      menu.open = isOpen;
    }

    const trigger = menu?.querySelector('draco-action-menu-trigger') as DracoActionMenuTrigger | null;
    if (trigger) {
      trigger.open = isOpen;
    }

  };

  private _positionOverlay() {
    const menu = this.closest('draco-action-menu') as DracoActionMenu | null;
    const trigger = menu?.querySelector('draco-action-menu-trigger') as DracoActionMenuTrigger | null;
    if (!trigger || !this._popoverEl) return;

    const rect = trigger.getBoundingClientRect();
    this._popoverEl.style.position = 'fixed';
    this._popoverEl.style.top = `${rect.bottom + 4}px`;
    this._popoverEl.style.left = `${rect.left}px`;
  }

  show() {
    this._positionOverlay();
    this._popoverEl?.showPopover();
  }

  hide() {
    this._popoverEl?.hidePopover();
  }

  toggle() {
    this._positionOverlay();
    this._popoverEl?.togglePopover();
  }

  render() {
    const listClasses = classMap({
      list: true,
      depth: this.depth,
    });

    return html`
      <div class="popover">
        <ul role="menu" class=${listClasses}>
          <slot></slot>
        </ul>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'draco-action-menu-overlay': DracoActionMenuOverlay;
  }
}
