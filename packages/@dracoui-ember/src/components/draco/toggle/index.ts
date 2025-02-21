import {
  DracoToggleColorValues
} from "./types.ts";
import { assert } from "@ember/debug";
import Component from "@glimmer/component";

import type { DracoIconSignature } from "../icon";
import type { DracoToggleColors } from "./types";

export const DEFAULT_CHECKED = false;
export const DEFAULT_DISABLED = false;
export const DEFAULT_COLOR = DracoToggleColorValues.Primary;

export const AVAILABLE_COLORS: string[] = Object.values(DracoToggleColorValues);

export interface DracoToggleSignature {
  Args: {
    checked?: boolean;
    disabled?: boolean;
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
      `@color for "Draco::toggle" must be one of the following: ${AVAILABLE_COLORS.join(
        ', '
      )}; received: ${color}`,
      AVAILABLE_COLORS.includes(color)
    );

    return color;
  }

  get classNames(): string {
    const classes = ['draco-toggle'];

    // add color classes
    classes.push(`draco-toggle--color-${this.color}`)

    return classes.join(' ');
  }
}