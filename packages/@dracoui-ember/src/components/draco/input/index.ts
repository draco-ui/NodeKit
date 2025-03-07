import {
  DracoInputSizeValues,
  DracoInputIconPositionValues
} from "./types.ts";
import { assert } from "@ember/debug";
import Component from "@glimmer/component";

import type {
  DracoInputSizes,
  DracoInputIconPositions
} from "./types.ts";
import type Owner from '@ember/owner';
import type { DracoIconSignature } from "../icon";
import { DracoLinkIconPositionValues } from "../link/types.ts";

export const DEFAULT_SIZE: DracoInputSizes = DracoInputSizeValues.Medium as const;
export const DEFAULT_ICON_POSITION: DracoInputIconPositions = DracoLinkIconPositionValues.Leading as const;

export const AVAILABLE_SIZES: string[] = Object.values(DracoInputSizeValues);
export const AVAILABLE_ICON_POSITIONS: string[] = Object.values(DracoInputIconPositionValues);

export interface DracoInputSignature {
  Args: {
    size?: DracoInputSizes;
    placeholder?: string | undefined;
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

};