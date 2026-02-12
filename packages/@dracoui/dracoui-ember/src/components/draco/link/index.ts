import {
  DracoLinkSizeValues,
  DracoLinkIconPositionValues
} from "./types.ts";
import { assert } from '@ember/debug';
import Component from "@glimmer/component";

import type {
  DracoLinkSizes,
  DracoLinkIconPositions
} from "./types.ts";
import type Owner from '@ember/owner';
import type { DracoIconSignature } from "../icon/index.ts";
import type { DracoInteractiveSignature } from "../interactive/index.ts";

const DEFAULT_SIZE = DracoLinkSizeValues.Medium;
export const DEFAULT_ICON_POSITION = DracoLinkIconPositionValues.Leading;

export const AVAILABLE_SIZES: string[] = Object.values(DracoLinkSizeValues);
export const AVAILABLE_ICON_POSITIONS: string[] = Object.values(DracoLinkIconPositionValues);

export interface DracoLinkSignature {
  Args: DracoInteractiveSignature['Args'] & {
    text?: string | undefined;
    displayExternalIcon?: boolean;
    size?: DracoLinkSizes | number;
    iconPosition?: DracoLinkIconPositions;
    icon?: DracoIconSignature['Args']['name'];
    iconSize?: DracoIconSignature['Args']['size'];
  };
  Element: DracoInteractiveSignature['Element'];
}

export default class DracoLink extends Component<DracoLinkSignature> {
  constructor(owner: Owner, args: DracoLinkSignature['Args']) {
    super(owner, args);

    if (!(this.args.href || this.args.route)) {
      assert('@href or @route must be defined for <Draco::Link>');
    }
  }

  get text(): string | undefined {
    return this.args.text ?? undefined;
  }

  get displayExternalIcon() : boolean {
    const { displayExternalIcon = true } = this.args;

    assert(
      `@route for "Draco::Link" must be a valid 'boolean'; received: ${displayExternalIcon}`,
      typeof displayExternalIcon === 'boolean'
    );

    return displayExternalIcon;
  }

  get size(): DracoLinkSizes | number {
    const { size = DEFAULT_SIZE } = this.args;

    assert(
      `@size for "Draco::Link" must be a valid 'number' or one of the following ${AVAILABLE_SIZES.join(
        ', '
      )}; received: ${size}`,
      typeof size === 'number' || AVAILABLE_SIZES.includes(size)
    );

    return size;
  }

  get icon(): DracoIconSignature['Args']['name'] | undefined {
    return this.args.icon ?? undefined;
  }

  get iconSize(): DracoIconSignature['Args']['size']  {
    const { iconSize, size } = this.args;

    if (!iconSize) {
      switch(size) {
        case 'small':
          return 16;
        case 'medium':
          return 22;
        case 'large':
          return 26;
      }
    }

    return iconSize;
  }

  get iconPosition(): DracoLinkIconPositions {
    const { iconPosition = DEFAULT_ICON_POSITION } = this.args;

    assert(
      `@iconPosition for "Draco::Link" must be one of the following: ${AVAILABLE_ICON_POSITIONS.join(
        ', '
      )}; received: ${iconPosition}`,
      AVAILABLE_ICON_POSITIONS.includes(iconPosition)
    );

    return iconPosition;
  }

  get isExternal(): boolean {
    if (this.args.route && !this.args.href) {
      return false;
    }

    if (this.args.href) {
      try {
        const url = new URL(this.args.href, window.location.origin);
        return url.origin !== window.location.origin;
      } catch (e) {
        return false;
      }
    }

    return false;
  }

  get classNames(): string {
    const classes = ['draco-link'];

    // add size if not specified as number
    if (typeof this.size !== 'number') {
      classes.push(`draco-link--size-${this.size}`);
    }

    return classes.join(' ');
  }
};