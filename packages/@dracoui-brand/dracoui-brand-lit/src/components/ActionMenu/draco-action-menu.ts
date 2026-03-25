/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import styles from './draco-action-menu.scss?inline';

import type { CSSResult, TemplateResult } from 'lit';
import type { DracoActionMenuTrigger } from './draco-action-menu-trigger.js';
import type { DracoActionMenuOverlay } from './draco-action-menu-overlay.js';

@customElement('draco-action-menu')
export class DracoActionMenu extends LitElement {
  static styles: CSSResult = unsafeCSS(styles);

  @property({ type: Boolean, reflect: true })
  open: boolean = false;

  protected updated(changed: Map<string, unknown>): void {
    if (changed.has('open')) {
      this.dispatchEvent(
        new CustomEvent('draco-open-change', {
          detail: { open: this.open },
          bubbles: true,
          composed: true,
        }),
      );
    }
  }

  getOverlay(): DracoActionMenuOverlay | null {
    return this.querySelector('draco-action-menu-overlay');
  }

  getButton(): DracoActionMenuTrigger | null {
    return this.querySelector('draco-action-menu-trigger');
  }

  render(): TemplateResult<1> {
    return html`<slot />`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'draco-action-menu': DracoActionMenu;
  }
}
