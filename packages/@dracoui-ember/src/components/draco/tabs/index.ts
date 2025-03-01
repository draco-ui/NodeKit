import { action } from '@ember/object';
import Component from "@glimmer/component";
import { tracked } from '@glimmer/tracking';
import { assert, warn } from '@ember/debug';
import { DracoTabsSizeValues } from "./types";
import { next, schedule } from '@ember/runloop';

import type {
  DracoTabsSizes,
  DracoTabsTabIds,
  DracoTabsTabProp,
  DracoTabsPanelIds
} from './types';
import type Owner from '@ember/owner';
import type { DracoTabsTabSignature } from "./tab";
import type { ComponentLike } from '@glint/template';
import type { DracoTabsPanelSignature } from "./panel";

export const DEFAULT_SIZE: DracoTabsSizes = DracoTabsSizeValues.Medium as const;

export const AVAILABLE_SIZES: string[] = Object.values(DracoTabsSizeValues);

export interface DracoTabsSignature {
  Args: {
    size?: DracoTabsSizes;
    tabs?: DracoTabsTabProp;
    selectedTabIndex?: DracoTabsTabSignature['Args']['selectedTabIndex'];
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
      `@size for "Draco::Tabs" must be one of the following: ${AVAILABLE_SIZES.join(
        ', '
      )}; received: ${size}`,
      AVAILABLE_SIZES.includes(size)
    );

    return size;
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

  get classNames(): string {
    const classes = ['draco-tabs'];

    classes.push(`draco-tabs--size-${this.size}`);

    return classes.join(' ');
  }

  @action
  didInsert(): void {
    assert(
      'The number of Tabs must be equal to the number of Panels',
      this._tabNodes.length === this._panelNodes.length
    );

    if (this._selectedTabIndex) {
      this.selectedTabIndex = this._tabIds.indexOf(this._selectedTabId);
    }

    schedule('afterRender', (): void => {
      this.setTabIndicator();
    });
  }
};