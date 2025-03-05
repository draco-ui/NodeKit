import { action } from '@ember/object';
import Component from "@glimmer/component";
import { guidFor } from '@ember/object/internals';

import type {
  DracoTabsTabIds,
  DracoTabsTabIconPositions
} from "./types";
import type { DracoIconSignature } from "../../icon";
import type { DracoTabsPanelIds } from "../panel/types.ts";

export interface DracoTabsTabSignature {
  Args: {
    count?: string;
    isSelected?: boolean;
    tabIds?: DracoTabsTabIds;
    selectedTabIndex?: number;
    text?: string | undefined;
    panelIds?: DracoTabsPanelIds;
    iconPosition?: DracoTabsTabIconPositions;
    icon?: DracoIconSignature['Args']['name'];
    iconSize?: DracoIconSignature['Args']['size'];

    // Callback Functions
    willDestroyNode?: (element: HTMLButtonElement) => void;
    onClick?: (event: MouseEvent, tabIndex: number) => void;
    onKeyUp?: (nodeINdex: number, event: KeyboardEvent) => void;
    didUpdateNode?: (nodeIndex: number, isSelected?: boolean) => void;
    didInsertNode?: (element: HTMLButtonElement, isSelected?: boolean) => void;
  };
  Block: {
    default: [];
  };
  Element: HTMLLIElement;
};

export default class DracoTabsTab extends Component<DracoTabsTabSignature> {
  protected componentName = "Draco::Tabs::Tab";

  private _tabId = 'tab-' + guidFor(this);

  get nodeIndex(): number | undefined {
    return this.args.tabIds?.indexOf(this._tabId);
  }

  get icon(): DracoIconSignature['Args']['name'] | undefined {
    return this.args.icon ?? undefined;
  }

  get iconSize(): DracoIconSignature['Args']['size']  {
    const { iconSize = 16 } = this.args;

    return iconSize;
  }

  get disabled(): boolean {
    return this.args.disabled ?? false;
  }

  get isSelected(): boolean {
    return (
      this.nodeIndex !== undefined &&
      this.nodeIndex === this.args.selectedTabIndex
    );
  }

  get text(): string | undefined {
    return this.args.text ?? undefined;
  }

  get coupledPanelId(): string | undefined {
    return this.nodeIndex !== undefined
      ? this.args.panelIds?.[this.nodeIndex]
      : undefined;
  }

  get classNames(): string {
    const classes = ['draco-tabs__tab'];

    if (this.disabled) {
      classes.push('draco-tabs__tab--disabled')
    }

    if (this.isSelected) {
      classes.push(`draco-tabs__tab--selected`);
    }

    return classes.join(' ');
  }

  @action
  didInsertNode(element: HTMLButtonElement, positional: [boolean?]): void {
    const { didInsertNode } = this.args;

    const isSelected = positional[0];

    if (typeof didInsertNode === 'function') {
      didInsertNode(element, isSelected);
    }
  }

  @action
  didUpdateNode(): void {
    const { didUpdateNode } = this.args;

    if (typeof didUpdateNode === 'function' && this.nodeIndex !== undefined) {
      didUpdateNode(this.nodeIndex, this.args.isSelected);
    }
  }

  @action
  willDestroyNode(element: HTMLButtonElement): void {
    const { willDestroyNode } = this.args;

    if (typeof willDestroyNode === 'function') {
      willDestroyNode(element);
    }
  }

  @action
  onClick(event: MouseEvent): false | undefined {
    const { onClick } = this.args;

    if (typeof onClick === 'function' && this.nodeIndex !== undefined) {
      onClick(event, this.nodeIndex);
    } else {
      return false;
    }
  }

  @action
  onKeyUp(event: KeyboardEvent): void {
    const { onKeyUp } = this.args;

    if (typeof onKeyUp === 'function' && this.nodeIndex !== undefined) {
      onKeyUp(this.nodeIndex, event);
    }
  }
};