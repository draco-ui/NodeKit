import { action } from '@ember/object';
import Component from "@glimmer/component";
import { guidFor } from '@ember/object/internals';

import type { DracoTabsTabSignature } from "./tab";
import type { DracoTabsPanelIds, DracoTabsTabIds } from "./types";

export interface DracoTabsPanelSignature {
  Args: {
    tabIds?: DracoTabsTabIds;
    panelIds?: DracoTabsPanelIds;
    selectedTabIndex?: DracoTabsTabSignature['Args']['selectedTabIndex'];
    didInsertNode?: (element: HTMLElement, elementId: string) => void;
    willDestroyNode?: (element: HTMLElement) => void;
  };
  Blocks: {
    default: [
      {
        isVisible?: boolean
      }
    ]
  };
  Element: HTMLElement;
}

export default class DracoTabsPanel extends Component<DracoTabsPanelSignature> {
  private _elementId?: string;
  private _panelId = 'panel-' + guidFor(this);

  get nodeIndex(): number | undefined {
    return this.args.panelIds
      ? this.args.panelIds.indexOf(this._panelId)
      : undefined;
  }

  get isVisible(): boolean {
    return this.nodeIndex === this.args.selectedTabIndex;
  }

  get coupledTabId(): string | undefined {
    return this.nodeIndex !== undefined
      ? this.args.tabIds?.[this.nodeIndex]
      : undefined;
  }

  get classNames(): string {
    const classes = ['draco-tabs__panel'];

    return classes.join(' ');
  }

  @action
  didInsertNode(element: HTMLElement): void {
    const { didInsertNode } = this.args;

    if (typeof didInsertNode === 'function') {
      this._elementId = element.id;
      didInsertNode(element, this._elementId);
    }
  }

  @action
  willDestroyNode(element: HTMLElement): void {
    const { willDestroyNode } = this.args;

    if (typeof willDestroyNode === 'function') {
      willDestroyNode(element);
    }
  }
};