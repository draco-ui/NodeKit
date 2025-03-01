import { action } from '@ember/object';
import Component from "@glimmer/component";
import { guidFor } from '@ember/object/internals';

import type { DracoTabsPanelIds, DracoTabsTabIds } from "./types";

export interface DracoTabsTabSignature {
  Args: {
    tabIds?: DracoTabsTabIds;
    selectedTabIndex?: number;
    count?: string;
    isSelected?: boolean;
    panelIds?: DracoTabsPanelIds;


    // TODO: Make these private instance vars of tabs instead of args
    didInsertNode?: (element: HTMLButtonElement, isSelected?: boolean) => void;
    didUpdateNode?: (nodeIndex: number, isSelected?: boolean) => void;
    willDestroyNode?: (element: HTMLButtonElement) => void;
    onClick?: (event: MouseEvent, tabIndex: number) => void;
    onKeyUp?: (nodeINdex: number, event: KeyboardEvent) => void;
  };
  Block: {
    default: [];
  };
  Element: HTMLLIElement;
};

export default class DracoTabsTab extends Component<DracoTabsTabSignature> {
  private _tabId = 'tab-' + guidFor(this);

  get nodeIndex(): number | undefined {
    return this.args.tabIds?.indexOf(this._tabId);
  }

  get isSelected(): boolean {
    return (
      this.nodeIndex !== undefined &&
      this.nodeIndex === this.args.selectedTabIndex
    );
  }

  get coupledPanelId(): string | undefined {
    return this.nodeIndex !== undefined
      ? this.args.panelIds?.[this.nodeIndex]
      : undefined;
  }

  get classNames(): string {
    const classes = ['draco-tabs__tab'];

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