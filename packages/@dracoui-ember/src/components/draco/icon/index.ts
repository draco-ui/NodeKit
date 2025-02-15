import { assert } from '@ember/debug';
import Component from "@glimmer/component";

import type Owner from '@ember/owner';
import type { IconifyIcon } from "@iconify/types"

export const DEFAULT_SIZE = 32;

export interface DracoIconSignature {
  Args: {
    size?: number;
    name?: IconifyIcon;
    color?: string;
  };
  Element: SVGAElement;
}

export default class DracoIcon extends Component<DracoIconSignature> {
  constructor(owner: Owner, args: DracoIconSignature['Args']) {
    super(owner, args);

    if (!this.args.name) {
      assert('Please provide to "Draco::Icon" a value for @name');
    }
  }

  get size(): number {
    const { size = DEFAULT_SIZE } = this.args;

    assert(
      `@size for "Draco::Icon" must be a valid number; received: ${size}`,
      typeof size === 'number'
    );

    return size;
  }

  get name(): IconifyIcon {
    const { name } = this.args;

    // @ts-ignore
    return this.args.name;
  }

  get color(): string {
    const { color } = this.args;
    // @ts-ignore
    return color;
  }
};