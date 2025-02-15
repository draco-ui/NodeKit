import { assert } from '@ember/debug';
import { isPresent } from '@ember/utils';
import Component from "@glimmer/component";

import {
  DracoAvatarShapeValues
} from "./types.ts";

import type {
  DracoAvatarShapes
} from "./types.ts";

export const DEFAULT_SIZE = 32;
export const DEFAULT_SHAPE = 'circle';
export const AVAILABLE_SHAPES = [
  DracoAvatarShapeValues.Circle,
  DracoAvatarShapeValues.Square
];

export interface DracoAvatarSignature {
  Args: {
    size?: number;
    src?: string,
    shape?: DracoAvatarShapes;
  },
  Blocks: {
    default: []
  }
}

export default class DracoAvatar extends Component<DracoAvatarSignature> {
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

  get size(): number {
    const { size = DEFAULT_SIZE } = this.args;

    assert(
      `@size for "Draco::Avatar" must be a valid number; received: ${size}`,
      typeof size === 'number'
    );

    return size;
  }

  get src(): string {
    const src = this.args.src;

    if (!isPresent(src)) {
      return '';
    }

    try {
      new URL(src);
      return src;
    } catch (error) {
      assert(
        `@src "${src}" for "Draco::Avatar" is not a valid URL and cannot be used as a relative path.
        Please provide a valid URL or ensure the relative path is correct. Error: ${error}`,
        false
      );
      return '';
    }
  }

  get classNames(): string {
    const classes = ['draco-avatar'];

    // add a class based on the @size argument
    classes.push(`draco-avatar--shape-${this.shape}`);

    return classes.join(' ');
  }
}