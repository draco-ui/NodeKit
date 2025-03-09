import {
  DracoInputSizeValues,
  DracoInputTypeValues,
  DracoInputIconPositionValues
} from "./types.ts";
import { assert } from "@ember/debug";
import { action } from '@ember/object';
import Component from "@glimmer/component";

import type {
  DracoInputSizes,
  DracoInputTypes,
  DracoInputIconPositions
} from "./types.ts";
import type Owner from '@ember/owner';
import type { DracoIconSignature } from "../icon";
import { DracoLinkIconPositionValues } from "../link/types.ts";

export const DEFAULT_TYPE: DracoInputTypes = DracoInputTypeValues.Text as const;
export const DEFAULT_SIZE: DracoInputSizes = DracoInputSizeValues.Medium as const;
export const DEFAULT_ICON_POSITION: DracoInputIconPositions = DracoLinkIconPositionValues.Leading as const;

export const AVAILABLE_TYPES: string[] = Object.values(DracoInputTypeValues);
export const AVAILABLE_SIZES: string[] = Object.values(DracoInputSizeValues);
export const AVAILABLE_ICON_POSITIONS: string[] = Object.values(DracoInputIconPositionValues);

export interface DracoInputSignature {
  Args: {
    error?: string;
    placeholder?: string;
    size?: DracoInputSizes;
    type?: DracoInputTypes;
    iconPosition?: DracoInputIconPositions;
    icon?: DracoIconSignature['Args']['name'];
    iconSize?: DracoIconSignature['Args']['size'];
    prefix?: string | DracoIconSignature['Args']['name'];
    suffix?: string | DracoIconSignature['Args']['name'];
  };
  Element: HTMLInputElement;
};

export default class DracoInput extends Component<DracoInputSignature> {
  protected componentName = 'Draco::Input';

  constructor(owner: Owner, args: DracoInputSignature['Args']) {
    super(owner, args);

  }

  get placeholder(): string | undefined {
    return this.args.placeholder ?? undefined;
  }

  get error(): string | undefined {
    return this.args.error ?? undefined;
  }

  get size(): DracoInputSizes {
    const { size = DEFAULT_SIZE } = this.args;

    assert(
      `@size for "${this.componentName}" must be one of the following: ${AVAILABLE_SIZES.join(
        ', '
      )}; received: ${size}`,
      AVAILABLE_SIZES.includes(size)
    );

    return size;
  }

  get type(): DracoInputTypes {
    const { type = DEFAULT_TYPE } = this.args;

    assert(
      `@type for "${this.componentName}" must be one of the following: ${AVAILABLE_TYPES.join(
        ', '
      )}; received: ${type}`,
      AVAILABLE_TYPES.includes(type)
    );

    return type;
  }

  get classNames(): string {
    const classes = ['draco-input'];

    // add a class based on the @size argument
    classes.push(`draco-input--size-${this.size}`);

    return classes.join(' ');
  }
};