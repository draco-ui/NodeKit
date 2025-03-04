import {
  DracoTabsSizeValues,
  DracoTabsVariantValues
} from "./types.ts";
import { assert } from '@ember/debug';
import { action } from '@ember/object';
import Component from "@glimmer/component";
import { tracked } from '@glimmer/tracking';

import type {
  DracoTabsSizes,
  DracoTabsTabIds,
  DracoTabsTabProp,
  DracoTabsPanelIds,
  DracoTabsVariants
} from './types.ts';
import type Owner from '@ember/owner';
import type { DracoTabsTabSignature } from "./tab";
import type { ComponentLike } from '@glint/template';
import type { DracoTabsPanelSignature } from "./panel";

export const DEFAULT_SIZE: DracoTabsSizes = DracoTabsSizeValues.Medium as const;
export const DEFAULT_VARIANT: DracoTabsVariants = DracoTabsVariantValues.Primary as const;

export const AVAILABLE_SIZES: string[] = Object.values(DracoTabsSizeValues);
export const AVAILABLE_VARIANTS: string[] = Object.values(DracoTabsVariantValues);

export interface DracoTabsSignature {
  Args: {
    size?: DracoTabsSizes;
    isFullWidth?: boolean;
    tabs?: DracoTabsTabProp;
    isParentVisible: boolean;
    variant?: DracoTabsVariants;
    selectedTabIndex?: DracoTabsTabSignature['Args']['selectedTabIndex'];

    // Callback Functions
    onClickTab: (event: MouseEvent, tabIndex: number) => void;
  };
  Blocks: {
    default: [
      Tab?: ComponentLike<DracoTabsTabSignature>,
      Panel?: ComponentLike<DracoTabsPanelSignature>
    ];
  };
  Element: HTMLDivElement;
};

export default class DracoTabs extends Component<DracoTabsSignature> {
  protected componentName = 'Draco::Tabs';

  @tracked private _isControlled: boolean;
  @tracked private _selectedTabId?: string;
  @tracked private _selectedTabIndex: number;
  @tracked private _tabIds: DracoTabsTabIds = [];
  @tracked private _panelNodes: HTMLElement[] = [];
  @tracked private _panelIds: DracoTabsPanelIds = [];
  @tracked private _tabNodes: HTMLButtonElement[] = [];

  constructor(owner: Owner, args: DracoTabsSignature['Args']) {
    super(owner, args);
    
    // Allows tracking in costumers code or internal code
    this._isControlled = this.args.selectedTabIndex !== undefined;
    this._selectedTabIndex = this.args.selectedTabIndex ?? 0;
  }

  get size(): DracoTabsSizes {
    const { size = DEFAULT_SIZE } = this.args;

    assert(
      `@size for "${this.componentName}" must be one of the following: ${AVAILABLE_SIZES.join(
        ', '
      )}; received: ${size}`,
      AVAILABLE_SIZES.includes(size)
    );

    return size;
  }

  get tabs(): DracoTabsTabProp[] {
    const { tabs = [] } = this.args;

    // Validate the tabs for titles, icons and disabled props
    if (tabs) { // Only validate if tabs are provided
      tabs.forEach(tab => {
          assert(
          `@tabs member 'title' for "${this.componentName}" must be a 'string' value; received: ${typeof tab.title}`,
          typeof tab.title === 'string'
        );
      });
    }

    return tabs || [];
  }

  get selectedTabIndex(): number {
    if (this._isControlled) {
      return this.args.selectedTabIndex ?? 0;
    } else {
      return this._selectedTabIndex;
    }
  }

  set selectedTabIndex(value: number) {
    if (!this._isControlled) {
      this._selectedTabIndex = value;
    }
  }

  get isFullWidth(): boolean {
    return this.args.isFullWidth ?? true;
  }

  get classNames(): string {
    const classes = ['draco-tabs'];

    classes.push(`draco-tabs--size-${this.size}`);

    if (this.isFullWidth) {
      classes.push('draco-tabs--width-full');
    }

    return classes.join(' ');
  }

  @action
  didInsert(): void {
    assert(
      'The number of Tabs must be equal to the number of Panels',
      this._tabNodes.length === this._panelNodes.length
    );

    if (this._selectedTabId) {
      this.selectedTabIndex = this._tabIds.indexOf(this._selectedTabId);
    }
  }

  @action
  didUpdateSelectedTabId(): void {
    // if the selected tab is set dynamically (eg. in a `each` loop)
    // the `Tab` nodes will be re-inserted/rendered, which means the `this.selectedTabId` variable changes
    // but the parent `Tabs` component has already been rendered/inserted but doesn't re-render
    // so the value of the `selectedTabIndex` is not updated, unless we trigger a recalculation
    // using the `did-update` modifier that checks for changes in the `this.selectedTabId` variable
    if (this._selectedTabId) {
      this.selectedTabIndex = this._tabIds.indexOf(this._selectedTabId);
    }
  }

  @action
  didInsertTab(element: HTMLButtonElement, isSelected?: boolean): void {
    this._tabNodes = [...this._tabNodes, element];
    this._tabIds = [...this._tabIds, element.id];
    if (isSelected) {
      this._selectedTabId = element.id;
    }
  }

  @action
  didUpdateTab(tabIndex: number, isSelected?: boolean): void {
    if (isSelected) {
      this.selectedTabIndex = tabIndex;
    }
  }

  @action
  willDestroyTab(element: HTMLButtonElement): void {
    this._tabNodes = this._tabNodes.filter(
      (node): boolean => node.id !== element.id
    );
    this._tabIds = this._tabIds.filter(
      (tabId): boolean => tabId !== element.id
    );
  }

  @action
  didInsertPanel(element: HTMLElement, panelId: string): void {
    this._panelNodes = [...this._panelNodes, element];
    this._panelIds = [...this._panelIds, panelId];
  }

  @action
  willDestroyPanel(element: HTMLElement): void {
    this._panelNodes = this._panelNodes.filter(
      (node): boolean => node.id !== element.id
    );
    this._panelIds = this._panelIds.filter(
      (panelId): boolean => panelId !== element.id
    );
  }

  @action
  onClick(event: MouseEvent, tabIndex: number): void {
    this.selectedTabIndex = tabIndex;

    // invoke the callback function if it's provided as argument
    if (typeof this.args.onClickTab === 'function') {
      this.args.onClickTab(event, tabIndex);
    }
  }
};