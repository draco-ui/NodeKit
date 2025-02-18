import {
  DracoBadgeSizeValues,
  DracoBadgeStyleValues
} from "./types.ts";
import { assert } from '@ember/debug';
import Component from "@glimmer/component";

import type {
  DracoBadgeSizes,
  DracoBadgeColors
} from "./types.ts";

// Default values
export const DEFAULT_STYLE = DracoBadgeStyleValues.Pill;
export const DEFAULT_SIZE = DracoBadgeSizeValues.Medium;

// Available values
export const AVAILABLE_SIZES: string[] = Object.values(DracoBadgeSizeValues);
export const AVAILABLE_STYLES: string[] = Object.values(DracoBadgeStyleValues);

export interface DracoButtonSignature {
  Args: {
    size?: DracoBadgeSizes;
    color?: DracoBadgeColors;
  };
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

  get classNames(): string {
    const classes = ['draco-badge'];

    // add a class based on the @size argument
    classes.push(`draco-badge--size-${this.size}`);

    return classes.join(' ');
  };
};