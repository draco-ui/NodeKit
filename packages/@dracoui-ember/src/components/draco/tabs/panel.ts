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
};