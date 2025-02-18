import {
  DracoBadgeSizeValues,
  DracoBadgeTypeValues,
  DracoBadgeColorValues
} from "./types.ts";
import { assert } from '@ember/debug';
import Component from "@glimmer/component";

import type {
  DracoBadgeTypes,
  DracoBadgeSizes,
  DracoBadgeColors,
} from "./types.ts";

export const DEFAULT_TYPE = DracoBadgeTypeValues.Pill;
export const DEFAULT_SIZE = DracoBadgeSizeValues.Medium;
export const DEFAULT_COLOR = DracoBadgeColorValues.Inverted;

export const AVAILABLE_SIZES: string[] = Object.values(DracoBadgeSizeValues);
export const AVAILABLE_TYPES: string[] = Object.values(DracoBadgeTypeValues);
export const AVAILABLE_COLORS: string[] = Object.values(DracoBadgeColorValues);

export interface DracoButtonSignature {
  Args: {
    isIconOnly?: boolean;
    type?: DracoBadgeTypes;
    size?: DracoBadgeSizes;
    color?: DracoBadgeColors;
    text?: string | undefined;
    label?: string | undefined;
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

    return color;
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