/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import type { DracoActionMenu } from './draco-action-menu.js';
import type { DracoActionMenuOverlay } from './draco-action-menu-overlay.js';

@customElement('draco-action-menu-trigger')
export class DracoActionMenuTrigger extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }
  `;

  // — State —
  @property({ type: Boolean, reflect: true })
  open: boolean = false;

  private _wasOpen: boolean = false;

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('mousedown', this._handleMouseDown);
    this.addEventListener('click', this._handleClick);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('mousedown', this._handleMouseDown);
    this.removeEventListener('click', this._handleClick);
  }

  private _handleMouseDown = (): void => {
    this._wasOpen = this.open;
  };

  private _handleClick = (): void => {
    if (this._wasOpen) return;

    const menu = this.closest('draco-action-menu') as DracoActionMenu | null;
    if (!menu) return;

    const overlay = menu.querySelector('draco-action-menu-overlay') as DracoActionMenuOverlay | null;
    if (!overlay) return;

    overlay.show();
  };

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'draco-action-menu-trigger': DracoActionMenuTrigger;
  }
}
