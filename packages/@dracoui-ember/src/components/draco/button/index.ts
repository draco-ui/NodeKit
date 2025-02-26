import {
  DracoButtonSizeValues,
  DracoButtonShapeValues,
  DracoButtonColorValues,
  DracoButtonIconPositionValues,
} from './types.ts';
import { assert } from "@ember/debug";
import Component from "@glimmer/component";

import type {
  DracoButtonSizes,
  DracoButtonShapes,
  DracoButtonColors,
  DracoButtonIconPositions
} from './types.ts';
import type { DracoIconSignature } from "../icon";
import type { DracoInteractiveSignature } from '../interactive/';

export const DEFAULT_SIZE = DracoButtonSizeValues.Medium;
export const DEFAULT_SHAPE = DracoButtonShapeValues.Square;
export const DEFAULT_COLOR = DracoButtonColorValues.Primary;
export const DEFAULT_ICON_POSITION = DracoButtonIconPositionValues.Leading;

export const AVAILABLE_SIZES: string[] = Object.values(DracoButtonSizeValues);
export const AVAILABLE_COLORS: string[] = Object.values(DracoButtonColorValues);
export const AVAILABLE_SHAPES: string[] = Object.values(DracoButtonShapeValues);
export const AVAILABLE_ICON_POSITIONS: string[] = Object.values(DracoButtonIconPositionValues);

export interface DracoButtonSignature {
    Args: DracoInteractiveSignature['Args'] & {
      text?: string;
      loading?: boolean;
      isInline?: boolean;
      isIconOnly?: boolean;
      isFullWidth?: boolean;
      size?: DracoButtonSizes;
      displayExternalIcon?: boolean;
      shape?: DracoButtonShapes | undefined;
      iconPosition?: DracoButtonIconPositions;
      icon?: DracoIconSignature['Args']['name'];
      iconSize?: DracoIconSignature['Args']['size'];

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
      `@size for "Draco::Button" must be one of the following ${AVAILABLE_SIZES.join(
        ', '
      )}; received: ${size}`,
      AVAILABLE_SIZES.includes(size)
    );

    return size;
  }

  get displayExternalIcon() : boolean {
    const { displayExternalIcon = true } = this.args;

    assert(
      `@route for "Draco::Button" must be a valid 'boolean'; received: ${displayExternalIcon}`,
      typeof displayExternalIcon === 'boolean'
    );

    return displayExternalIcon;
  }

  get color(): DracoButtonColors {
    const color = this.args.color || this.args.variant || this.args.type || DEFAULT_COLOR;

    assert(
      `@color for "Draco::Button" must be one of the following: ${AVAILABLE_COLORS.join(
        ', '
      )}; received: ${color}`,
      AVAILABLE_COLORS.includes(color)
    );

    return color;
  }

  get loading(): boolean {
    return this.args.loading ?? false;
  }

  get shape(): DracoButtonShapes {
    const { shape = DEFAULT_SHAPE } = this.args;

    assert(
      `@shape for "Draco::Button" must be one of the following: ${AVAILABLE_SHAPES.join(
        ', '
      )}; received: ${shape}`,
      AVAILABLE_SHAPES.includes(shape)
    );

    return shape;
  }

  get isFullWidth(): boolean {
    return this.args.isFullWidth ?? false;
  }

  get icon(): DracoIconSignature['Args']['name'] | undefined {
    return this.args.icon ?? undefined;
  }

  get isIconOnly(): boolean {
    if (this.icon) {
      return this.args.isIconOnly ?? false;
    }
    return false;
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

  get iconPosition(): DracoButtonIconPositions {
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

    if (this.isIconOnly) {
      classes.push('draco-button--icon-only');
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