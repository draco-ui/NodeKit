import { action } from '@ember/object';
import Component from "@glimmer/components";
import { assert, warn } from "@glimmer/debug";
import type { ComponentLike } from '@glint/template';
import type { DracoTabsSizeValues } from './types.ts';

export const DEFAULT_SIZE: DracoTabsSizes = 'medium' as const;
export const SIZES: DracoTabsSizes[] = Object.values(DracoTabsSizeValues);

export interface DracoTabsSignature {
  Args: {
    size?: DracoTabsSizes;
    onClickTab?: (event: MouseEvent, tabIndex: number) => void;
    selectedTabIndex?: DracoTabsTabSignature['Args']['selectedTabIndex'];
    isParentVisible?: boolean;
  };
  Blocks: {
    default: [
      {
        Tab?: ComponentLike<DracoTabsTabSignature>;
        Panel?: ComponentLike<DracoTabsPanelSignature>;
      },
    ];
  };
  Element: HTMLDivElement;
}

export default class DracoTabs extends Component<DracoTabsSignature> {
  get size(): DracoTabsSizes {
    const { size = DEFAULT_SIZE } = this.args;

    assert(
      `@size for "Draco::Tabs" must be one of the following: ${SIZES.join(
        ', '
      )}; received: ${size}`,
      SIZES.includes(size)
    );

    return size;
  }

  constructor(owner: unknown, args: DracoTabsSignature['Args']) {
    super(owner, args);

      // this is to determine if the "selected" tab logic is controlled in the consumers' code or is maintained as an internal state
      this._isControlled = this.args.selectedTabIndex !== undefined;
      this._selectedTabIndex = this.args.selectedTabIndex ?? 0;
  }
}