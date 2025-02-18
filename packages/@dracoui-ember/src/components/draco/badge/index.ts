import {
  DracoBadgeSizeValues,
  DracoBadgeTypeValues,
  DracoBadgeColorValues,
  DracoBadgeIconPositionValues
} from "./types.ts";
import { assert } from '@ember/debug';
import Component from "@glimmer/component";

import type {
  DracoBadgeTypes,
  DracoBadgeSizes,
  DracoBadgeColors,
  DracoBadgeIconPositions
} from "./types.ts";
import type { DracoIconSignature } from "../icon";

export const DEFAULT_TYPE = DracoBadgeTypeValues.Pill;
export const DEFAULT_SIZE = DracoBadgeSizeValues.Medium;
export const DEFAULT_COLOR = DracoBadgeColorValues.Inverted;
export const DEFAULT_ICON_POSITION = DracoBadgeIconPositionValues.Leading;

export const AVAILABLE_SIZES: string[] = Object.values(DracoBadgeSizeValues);
export const AVAILABLE_TYPES: string[] = Object.values(DracoBadgeTypeValues);
export const AVAILABLE_COLORS: string[] = Object.values(DracoBadgeColorValues);
export const AVAILABLE_ICON_POSITIONS: string[] = Object.values(DracoBadgeIconPositionValues);

export interface DracoButtonSignature {
  Args: {
    isIconOnly?: boolean;
    type?: DracoBadgeTypes;
    size?: DracoBadgeSizes;
    color?: DracoBadgeColors;
    text?: string | undefined;
    label?: string | undefined;
    iconPosition?: DracoBadgeIconPositions;
    icon?: DracoIconSignature['Args']['name'];
    iconSize?: DracoIconSignature['Args']['size'];
  };
  Element: HTMLSpanElement;
};

export default class DracoBadge extends Component<DracoButtonSignature> {
  get size(): DracoBadgeSizes {
    const { size = DEFAULT_SIZE } = this.args;

    assert(
      `@size for "Draco::Badge" must be one of the following ${AVAILABLE_SIZES.join(
        ', '
      )}; received: ${size}`,
      AVAILABLE_SIZES.includes(size)
    );

    return size;
  };

  get color(): DracoBadgeColors {
    const { color = DEFAULT_COLOR } = this.args;

    assert(
      `@color for "Draco::Badge" must be one of the following ${AVAILABLE_COLORS.join(
        ', '
      )}; received: ${color}`,
      AVAILABLE_COLORS.includes(color)
    );

    // Only allow subtle colors for @type="chip"
    if (this.type === "chip") {
      if (!color.includes('-subtle')) {
        return (`${color}-subtle`) as DracoBadgeColors;
      }
    }

    return color;
  }

  get iconSize(): DracoIconSignature['Args']['size']  {
    const { iconSize } = this.args;

    if (!iconSize) {
      switch(this.size) {
        case 'small':
          return 16;
        case 'medium':
          return 20;
        case 'large':
          return 26;
      }
    }

    return iconSize;
  }

  get icon(): DracoIconSignature['Args']['name'] | undefined {
    const { icon = undefined } = this.args;

    return icon;
  }

  get iconPosition(): DracoBadgeIconPositions {
    const { iconPosition = DEFAULT_ICON_POSITION } = this.args;

    assert(
      `@iconPosition for "Draco::Button" can't be used if @isIconOnly is '${this.args.isIconOnly}'`,
      !(this.args.iconPosition && this.args.isIconOnly)
    );

    assert(
      `@iconPosition for "Draco::Button" must be one of the following: ${AVAILABLE_ICON_POSITIONS.join(
        ', '
      )}; received: ${iconPosition}`,
      AVAILABLE_ICON_POSITIONS.includes(iconPosition)
    );

    return iconPosition;
  }

  get type(): DracoBadgeTypes {
    const { type = DEFAULT_TYPE } = this.args;

    assert(
      `@type for "Draco::Badge" must be one of the following ${AVAILABLE_TYPES.join(
        ', '
      )}; received: ${type}`,
      AVAILABLE_TYPES.includes(type)
    );

    return type;
  }

  get badgeText(): string | undefined {
    const { text, label } = this.args;

    assert(
      'Cannot use both @text and @label arguments on "Draco::Badge" simultaneously',
      !(text && label)
    );

    return text || label;
  }

  get classNames(): string {
    const classes = ['draco-badge'];

    // add a class based on the @size argument
    classes.push(`draco-badge--size-${this.size}`);

    // add color class
    classes.push(`draco-badge--color-${this.color}`);

    // add type class
    classes.push(`draco-badge--type-${this.type}`);

    return classes.join(' ');
  };
};