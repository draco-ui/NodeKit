import {
  DracoToggleSizeValues,
  DracoToggleColorValues
} from "./types.ts";
import { assert } from "@ember/debug";
import Component from "@glimmer/component";

import type {
  DracoToggleSizes,
  DracoToggleColors
} from "./types";
import type { DracoIconSignature } from "../icon";

export const DEFAULT_CHECKED = false;
export const DEFAULT_DISABLED = false;
export const DEFAULT_SIZE = DracoToggleSizeValues.Medium;
export const DEFAULT_COLOR = DracoToggleColorValues.Primary;

export const AVAILABLE_SIZES: string[] = Object.values(DracoToggleSizeValues);
export const AVAILABLE_COLORS: string[] = Object.values(DracoToggleColorValues);

export interface DracoToggleSignature {
  Args: {
    checked?: boolean;
    disabled?: boolean;
    size?: DracoToggleSizes;
    color?: DracoToggleColors;
    text?: string | undefined;
    icon?: DracoIconSignature['Args']['name'];
    iconSize?: DracoIconSignature['Args']['size'];
  };
};

export default class DracoToggle extends Component<DracoToggleSignature> {
  get text(): string | undefined {
    return this.args.text ?? undefined;
  }

  get checked(): boolean {
    const { checked = DEFAULT_CHECKED } = this.args;

    assert(
      `@checked for "Draco::Toggle" must be a valid 'boolean'; received: ${checked}`,
      typeof checked === 'boolean'
    );

    return checked;
  }

  get disabled(): boolean {
    const { disabled = DEFAULT_DISABLED } = this.args;

    assert(
      `@disabled for "Draco::Toggle" must be a valid 'boolean'; received: ${disabled}`,
      typeof disabled === 'boolean'
    );

    return disabled;
  }

  get color(): DracoToggleColors {
    const { color = DEFAULT_COLOR } = this.args;

    assert(
      `@color for "Draco::Toggle" must be one of the following: ${AVAILABLE_COLORS.join(
        ', '
      )}; received: ${color}`,
      AVAILABLE_COLORS.includes(color)
    );

    return color;
  }

  get size(): DracoToggleSizes {
    const { size = DEFAULT_SIZE } = this.args;

    assert(
      `@size for "Draco::Toggle" must be one of the following: ${AVAILABLE_SIZES.join(
        ', '
      )}; received: ${size}`,
      AVAILABLE_SIZES.includes(size)
    );

    return size;
  }

  get classNames(): string {
    /**
     * @note
     * The default class goes to the indicator element instead
     * of the parent element as in all other components.
    */
    const classes = ['draco-toggle__thumb'];

    // add color classes
    classes.push(`draco-toggle--color-${this.color}`);

    // add the size classes
    classes.push(`draco-toggle--size-${this.size}`);

    return classes.join(' ');
  }
}