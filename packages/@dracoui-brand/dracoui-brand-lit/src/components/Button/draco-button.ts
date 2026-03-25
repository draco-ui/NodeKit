/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */


import { LitElement, html, unsafeCSS } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query } from 'lit/decorators.js';

import styles from './draco-button.scss?inline';

import type { CSSResult, TemplateResult } from 'lit';
import type { DirectiveResult } from 'lit/directive.js';
import type { ClassMapDirective } from 'lit/directives/class-map.js';

const elevatedConverter = {
  fromAttribute(value: string | null): 'hover' | 'always' | 'none' {
    if (value === null || value === 'false' || value === 'none') return 'none';
    if (value === '' || value === 'true' || value === 'always') return 'always';
    return 'hover';
  },
  toAttribute(value: 'hover' | 'always' | 'none'): string | null {
    if (value === 'none') return null;
    return value;
  },
};

@customElement('draco-button')
export class DracoButton extends LitElement {
  static styles: CSSResult = unsafeCSS(styles);

  // — Appearance —
  @property({ reflect: true })
  shape: 'rounded' | 'pill' = 'rounded';
  @property({ reflect: true })
  size: 'small' | 'medium' | 'large' = 'medium';
  @property({ reflect: true })
  variant: 'primary' | 'secondary' | 'outline' | 'ghost' = 'primary';
  @property({ converter: elevatedConverter, reflect: true })
  elevated: 'hover' | 'always' | 'none' = 'hover';

  // — State —
  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;
  @property({ type: Boolean, reflect: true })
  fullWidth: boolean = false;

  // — Content —
  @property()
  label: string = '';

  // — DOM refs —
  @query('button')
  private _button!: HTMLButtonElement;

  /** Programmatically focus the inner <button>. */
  public override focus(options?: FocusOptions): void {
    this._button?.focus(options);
  }

  /** Programmatically click the inner <button>. */
  public override click(): void {
    this._button?.click();
  }

  private _handleClick(e: MouseEvent): void {
    if (this.disabled) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  render(): TemplateResult<1> {
    const classes: DirectiveResult<typeof ClassMapDirective> = classMap({
      [`variant-${this.variant}`]: true,
      [`size-${this.size}`]: true,
      [`shape-${this.shape}`]: true,
      'elevated-hover': this.elevated === 'hover',
      'elevated-always': this.elevated === 'always',
      'full-width': this.fullWidth,
    });

    return html`
      <button class=${classes} ?disabled=${this.disabled} @click=${this._handleClick}>
        <span class="text">
          <slot>${this.label}</slot>
        </span>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'draco-button': DracoButton;
  }
}
