import { assert } from "@ember/debug";
import Component from "@glimmer/component";
import { iconExists } from '@iconify/ember/components/iconify-icon';

import {
  DracoButtonSizeValues,
  DracoButtonColorValues,
  DracoButtonIconPositionValues,
} from './types.ts';

import type {
  DracoButtonSizes,
  DracoButtonColors,
  DracoButtonIconPositions,
} from './types.ts';

export const SIZES: string[] = Object.values(DracoButtonSizeValues);
export const COLORS: string[] = Object.values(DracoButtonColorValues);
export const ICONPOSITIONS: string[] = Object.values(DracoButtonIconPositionValues);
export const DEFAULT_SIZE = DracoButtonSizeValues.Medium;
export const DEFAULT_COLOR = DracoButtonColorValues.Primary;
export const DEFAULT_ICONPOSITION = DracoButtonIconPositionValues.Leading;


export interface DracoButtonSignature {
    Args: DracoInteractiveSignature['Args'] & {
      size?: DracoButtonSizes;
      color?: DracoButtonColors;
      text: string;
      icon?: DracoIconSignature['Args']['name'];
      iconPosition?: DracoButtonIconPositions;
      isIconOnly?: boolean;
      isFullWidth?: boolean;
      isInline?: boolean;
    };
    Element: DracoInteractiveSignature['Element'];
  }

export default class Button extends Component<DracoButtonSignature> {
  constructor(owner: unknown, args: DracoButtonSignature['Args']) {
    super(owner, args);

    if (args.icon) {
      assert(
        `Invalid icon "${args.icon}" provided to "Draco::Button". Icon does not exist in Iconify registry.`,
        iconExists(args.icon)
      );
    }
  }

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

  get icon(): string | undefined {
    assert(
      `when the "Draco::Button" @color is "tertiary" an @icon is required`,
      !(this.color === undefined && !this.args.icon)
    );

    if (this.args.icon) {
      assert(
        `Icon "${this.args.icon}" must exist in Iconify registry`,
        iconExists(this.args.icon)
      );
    }

    return this.args.icon ?? undefined;
  }

  get isIconOnly(): boolean {
    if (this.icon) {
      return this.args.isIconOnly ?? false;
    }
    
    return false;
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

    // add a class based on isIconOnly argument
    if (this.isIconOnly) {
      classes.push('draco-button--is-icon-only');
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