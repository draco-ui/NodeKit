import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

import styles from './draco-tabs.scss?inline';
import type { DracoTab } from './draco-tab.js';
import type { DracoTabPanel } from './draco-tab-panel.js';

@customElement('draco-tabs')
export class DracoTabs extends LitElement {
  static styles = unsafeCSS(styles);

  @property({ type: Number, reflect: true })
  selectedIndex = 0;

  @query('.indicator')
  private _indicator!: HTMLDivElement;

  @query('.tablist')
  private _tablist!: HTMLDivElement;

  private _tabs: DracoTab[] = [];
  private _panels: DracoTabPanel[] = [];
  private _hasInitialized = false;

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('draco-tab-select', this._onTabSelect as EventListener);
    this.addEventListener('keydown', this._onKeydown);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.removeEventListener('draco-tab-select', this._onTabSelect as EventListener);
    this.removeEventListener('keydown', this._onKeydown);
  }

  firstUpdated(): void {
    this._assignSlots();
    this._updateSelection();
    // Position indicator without transition on first render
    requestAnimationFrame(() => {
      this._updateIndicator(false);
      // Enable transitions after initial positioning
      requestAnimationFrame(() => {
        this._hasInitialized = true;
      });
    });
  }

  updated(changed: Map<string, unknown>): void {
    if (changed.has('selectedIndex')) {
      this._updateSelection();
      this._updateIndicator(this._hasInitialized);
    }
  }

  private _updateIndicator(animate: boolean): void {
    const activeTab = this._tabs[this.selectedIndex];
    if (!activeTab || !this._indicator || !this._tablist) return;

    const tablistRect = this._tablist.getBoundingClientRect();
    const tabRect = activeTab.getBoundingClientRect();

    const left = tabRect.left - tablistRect.left;
    const width = tabRect.width;

    if (!animate) {
      this._indicator.style.transition = 'none';
    } else {
      this._indicator.style.transition = '';
    }

    this._indicator.style.transform = `translateX(${left}px)`;
    this._indicator.style.width = `${width}px`;

    if (!animate) {
      // Force reflow so the non-animated position takes effect before re-enabling transitions
      this._indicator.getBoundingClientRect();
      this._indicator.style.transition = '';
    }
  }

  private _assignSlots(): void {
    const children = Array.from(this.children);
    this._tabs = [];
    this._panels = [];

    for (const child of children) {
      if (child.tagName === 'DRACO-TAB') {
        child.setAttribute('slot', 'tab');
        this._tabs.push(child as DracoTab);
      } else if (child.tagName === 'DRACO-TAB-PANEL') {
        child.setAttribute('slot', 'panel');
        this._panels.push(child as DracoTabPanel);
      }
    }
  }

  private _updateSelection(): void {
    this._tabs.forEach((tab, i) => {
      tab.active = i === this.selectedIndex;
    });
    this._panels.forEach((panel, i) => {
      panel.active = i === this.selectedIndex;
    });
  }

  private _onTabSelect = (e: CustomEvent): void => {
    const tab = e.target as DracoTab;
    const index = this._tabs.indexOf(tab);
    if (index >= 0 && index !== this.selectedIndex) {
      this.selectedIndex = index;
      this.dispatchEvent(
        new CustomEvent('draco-tab-change', {
          detail: { index },
          bubbles: true,
          composed: true,
        }),
      );
    }
  };

  private _onKeydown = (e: KeyboardEvent): void => {
    const enabledTabs = this._tabs.filter((t) => !t.disabled);
    if (enabledTabs.length === 0) return;

    const currentTab = e.target as DracoTab;
    if (!this._tabs.includes(currentTab)) return;

    let newIndex = -1;

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const currentEnabledIdx = enabledTabs.indexOf(currentTab);
      const nextTab = enabledTabs[(currentEnabledIdx + 1) % enabledTabs.length];
      newIndex = this._tabs.indexOf(nextTab);
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const currentEnabledIdx = enabledTabs.indexOf(currentTab);
      const prevTab =
        enabledTabs[(currentEnabledIdx - 1 + enabledTabs.length) % enabledTabs.length];
      newIndex = this._tabs.indexOf(prevTab);
    } else if (e.key === 'Home') {
      e.preventDefault();
      newIndex = this._tabs.indexOf(enabledTabs[0]);
    } else if (e.key === 'End') {
      e.preventDefault();
      newIndex = this._tabs.indexOf(enabledTabs[enabledTabs.length - 1]);
    }

    if (newIndex >= 0 && newIndex !== this.selectedIndex) {
      this.selectedIndex = newIndex;
      this._tabs[newIndex]?.focus();
      this.dispatchEvent(
        new CustomEvent('draco-tab-change', {
          detail: { index: newIndex },
          bubbles: true,
          composed: true,
        }),
      );
    } else if (newIndex >= 0) {
      this._tabs[newIndex]?.focus();
    }
  };

  render() {
    return html`
      <div class="tablist" role="tablist">
        <div class="indicator"></div>
        <slot name="tab"></slot>
      </div>
      <div class="panels">
        <slot name="panel"></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'draco-tabs': DracoTabs;
  }
}
