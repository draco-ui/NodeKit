import { assert } from "@ember/debug";
import Component from "@glimmer/component";

import {
  DracoButtonSizeValues,
  DracoButtonColorValues,
} from './types.ts';
import type {
  DracoButtonSizes,
  DracoButtonShapes,
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
      loading?: boolean,
      text?: string;
      isFullWidth?: boolean;
      isInline?: boolean;
      shape?: DracoButtonShapes | undefined,

      // Allow calling of color from @variant, @type or @color
      type?: DracoButtonColors;
      color?: DracoButtonColors;
      variant?: DracoButtonColors;
    };
    Element: DracoInteractiveSignature['Element'];
  }

export default class DracoButton extends Component<DracoButtonSignature> {
  get text(): string {
    const { text } = this.args;

    return text ?? '';
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
    const color = this.args.color || this.args.variant || this.args.type || DEFAULT_COLOR;

    assert(
      `@color for "Draco::Button" must be one of the following: ${COLORS.join(
        ', '
      )}; received: ${color}`,
      COLORS.includes(color)
    );

    return color;
  }

  get loading(): boolean {
    return this.args.loading ?? false;
  }

  get shape(): DracoButtonShapes {
    const { shape = 'square' } = this.args;

    assert(
      `@shape for "Draco::Button" must be one of the following: "square", "circle", "rounded"; received: ${shape}`,
      shape === undefined || ['square', 'circle', 'rounded'].includes(shape)
    );

    return shape;
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

    // Add shape parameters
    classes.push(`draco-button--shape-${this.shape}`);

    // Add mock disabled state for loading
    if (this.loading) {
      classes.push('mock-disabled');
    }

    // add a class based on the @size argument
    classes.push(`draco-button--size-${this.size}`);

    return classes.join(' ');
  }
}