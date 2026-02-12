import {
  DracoToggleSizeValues,
  DracoToggleColorValues,
  DracoToggleDirectionValues
} from "./types.ts";
import { assert } from "@ember/debug";
import { action } from '@ember/object';
import Component from "@glimmer/component";
import { tracked } from '@glimmer/tracking';

import type {
  DracoToggleSizes,
  DracoToggleColors,
  DracoToggleDirections,
  DracoToggleIconConfig
} from "./types";
import type Owner from '@ember/owner';
import type { DracoIconSignature } from "../icon";

export const DEFAULT_ICON_SIZES = {
  [DracoToggleSizeValues.Small]: 12,
  [DracoToggleSizeValues.Medium]: 16,
  [DracoToggleSizeValues.Large]: 20
};
export const DEFAULT_CHECKED = false;
export const DEFAULT_DISABLED = false;
export const DEFAULT_SIZE = DracoToggleSizeValues.Medium;
export const DEFAULT_COLOR = DracoToggleColorValues.Primary;
export const DEFAULT_DIRECTION = DracoToggleDirectionValues.ToggleFirst;

export const AVAILABLE_SIZES: string[] = Object.values(DracoToggleSizeValues);
export const AVAILABLE_COLORS: string[] = Object.values(DracoToggleColorValues);
export const AVAILABLE_DIRECTIONS: string[] = Object.values(DracoToggleDirectionValues);

export interface DracoToggleSignature {
  Args: {
    checked?: boolean;
    disabled?: boolean;
    size?: DracoToggleSizes;
    color?: DracoToggleColors;
    text?: string | undefined;
    icon?: DracoToggleIconConfig;
    direction?: DracoToggleDirections;
    iconSize?: DracoIconSignature['Args']['size'];
  };
};

export default class DracoToggle extends Component<DracoToggleSignature> {
  @tracked checkedState: boolean;

  /**
   * Constructor for the DracoToggle component.
   * @param {Owner} owner - The owner of the component.
   * @param {DracoToggleSignature['Args']} args - The arguments passed to the component.
   */
  constructor(owner: Owner, args: DracoToggleSignature['Args']) {
    super(owner, args);
    this.checkedState = this.args.checked ?? DEFAULT_CHECKED;
  }

  /**
   * Action to handle the toggle state change.
   */
  @action
  handleToggle() {
    this.checkedState = !this.checkedState;
  }

  /**
   * Getter for the text argument.
   * @returns {string | undefined} - The text to be displayed.
   */
  get text(): string | undefined {
    return this.args.text ?? undefined;
  }

  /**
   * Getter for the checked state.
   * @returns {boolean} - The checked state of the toggle.
   */
  get checked(): boolean {
    const checked = this.checkedState;

    assert(
      `@checked for "Draco::Toggle" must be a valid 'boolean'; received: ${checked}`,
      typeof checked === 'boolean'
    );

    return checked;
  }

  /**
   * Getter for the direction argument.
   * @returns {DracoToggleDirections} - The direction of the toggle.
   */
  get direction(): DracoToggleDirections {
    const { direction = DEFAULT_DIRECTION } = this.args;

    assert(
      `@direction for "Draco::Toggle" must be one of the following: ${AVAILABLE_DIRECTIONS.join(
        ', '
      )}; received: ${direction}`,
      AVAILABLE_DIRECTIONS.includes(direction)
    );

    return direction;
  }

  /**
   * Getter for the disabled state.
   * @returns {boolean} - The disabled state of the toggle.
   */
  get disabled(): boolean {
    const { disabled = DEFAULT_DISABLED } = this.args;

    assert(
      `@disabled for "Draco::Toggle" must be a valid 'boolean'; received: ${disabled}`,
      typeof disabled === 'boolean'
    );

    return disabled;
  }

  /**
   * Getter for the color argument.
   * @returns {DracoToggleColors} - The color of the toggle.
   */
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

  /**
   * Getter for the size argument.
   * @returns {DracoToggleSizes} - The size of the toggle.
   */
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

  /**
   * Getter for the icon argument.
   * @returns {DracoIconSignature['Args']['name'] | undefined} - The icon to be displayed.
   */
  get icon(): DracoIconSignature['Args']['name'] | undefined {
    const { icon } = this.args;

    if (Array.isArray(icon)) {
      const iconConfig = icon.find(config => this.checkedState ? config.checked : config.unchecked);
      return iconConfig ? (this.checkedState ? iconConfig.checked : iconConfig.unchecked) : undefined;
    }

    return icon;
  }

  /**
   * Getter for the icon size.
   * @returns {number} - The size of the icon.
   */
  get iconSize(): DracoIconSignature['Args']['size'] {
    return this.args.iconSize ?? DEFAULT_ICON_SIZES[this.size];
  }

  /**
   * Getter for the class names to be applied to the toggle.
   * @returns {string} - The class names for the toggle.
   */
  get classNames(): string {
    /**
     * @note
     * The default class goes to the indicator element instead
     * of the parent element as in all other components.
    */
    const classes = ['draco-toggle'];

    // add color classes
    classes.push(`draco-toggle--color-${this.color}`);

    // add the size classes
    classes.push(`draco-toggle--size-${this.size}`);

    // add the state of the button
    if (this.checkedState) {
      classes.push('draco-toggle--checked');
    }

    return classes.join(' ');
  }
}