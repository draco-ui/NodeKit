import {
  DracoAvatarSizeValues,
  DracoAvatarShapeValues
} from "./types.ts";
import { assert } from '@ember/debug';
import { isPresent } from '@ember/utils';
import Component from "@glimmer/component";

import type {
  DracoAvatarSizes,
  DracoAvatarShapes
} from "./types.ts";

export const DEFAULT_SIZE = DracoAvatarSizeValues.Medium;
export const DEFAULT_SHAPE = DracoAvatarShapeValues.Circle;
export const AVAILABLE_SIZES: string[] = Object.values(DracoAvatarSizeValues);
export const AVAILABLE_SHAPES: string[] = Object.values(DracoAvatarShapeValues);

export interface DracoAvatarSignature {
  Args: {
    src?: string,
    size?: DracoAvatarSizes;
    shape?: DracoAvatarShapes;
  }
}

export default class DracoAvatar<T extends DracoAvatarSignature = DracoAvatarSignature> extends Component<T> {
  get shape(): DracoAvatarShapes {
    const { shape = DEFAULT_SHAPE } = this.args;

    assert(
      `@shape for "Draco::Avatar" must be one of the following: ${AVAILABLE_SHAPES.join(
        ', '
      )}; received: ${shape}`,
      AVAILABLE_SHAPES.includes(shape)
    );

    return shape;
  }

  get size(): string {
    const { size = DEFAULT_SIZE } = this.args;

    assert(
      `@size for "Draco::Avatar" must be one of the following ${AVAILABLE_SIZES.join(
        ', '
      )}; received: ${size}`,
      AVAILABLE_SIZES.includes(size)
    );

    return size;
  }

  get src(): string {
    return isPresent(this.args.src) ? this.args.src : '';
  }

  get classNames(): string {
    const classes = ['draco-avatar'];

    // add a class based on the @size argument
    classes.push(`draco-avatar--size-${this.size}`);

    // add a class based on the @shape argument
    classes.push(`draco-avatar--shape-${this.shape}`);

    return classes.join(' ');
  }
}