import { assert } from "@ember/debug";
import Component from "@glimmer/component";

import {
  DracoButtonSizeValues,
  DracoButtonColorValues,
} from './types.ts';
import type {
  DracoButtonSizes,
  DracoButtonColors,
} from './types.ts';
import type { DracoInteractiveSignature } from '../interactive/';

export const SIZES: string[] = Object.values(DracoButtonSizeValues);
export const COLORS: string[] = Object.values(DracoButtonColorValues);
export const DEFAULT_SIZE = DracoButtonSizeValues.Medium;
export const DEFAULT_COLOR = DracoButtonColorValues.Primary;


export interface DracoButtonSignature {
    Args: DracoInteractiveSignature['Args'] & {
      size?: DracoButtonSizes;
      color?: DracoButtonColors;
      text: string;
      isFullWidth?: boolean;
      isInline?: boolean;
    };
    Element: DracoInteractiveSignature['Element'];
  }

export default class DracoButton extends Component<DracoButtonSignature> {
  get text(): string {
    const { text } = this.args;

    assert(
      '@text for "Draco::Button" must have a valid value',
      text !== undefined
    );

    return text;
  }

  get size(): DracoButtonSizes {
    const { size = DEFAULT_SIZE } = this.args;

    assert(
      `@size for "Draco::Button" must be one of the following ${SIZES.join(
        ', '
      )}; received: ${size}`,
      SIZES.includes(size)
    );

    return size;
  }

  get color(): DracoButtonColors {
    const { color = DEFAULT_COLOR } = this.args;

    assert(
      `@color for "Draco::Button" must be one of the following: ${COLORS.join(
        ', '
      )}; received: ${color}`,
      COLORS.includes(color)
    );

    return color;
  }

  get isFullWidth(): boolean {
    return this.args.isFullWidth ?? false;
  }

  get classNames(): string {
    const classes = ['draco-button'];

    // add a class based on the @color argument
    classes.push(`draco-button--color-${this.color}`);

    // add a class based on the @isFullWidth argument
    if (this.isFullWidth) {
      classes.push('draco-button--width-full');
    }

    // add a class based on the @isInline argument
    if (this.args.isInline) {
      classes.push('draco-button--is-inline');
    }

    // add a class based on the @size argument
    classes.push(`draco-button--size-${this.size}`);

    return classes.join(' ');
  }
}