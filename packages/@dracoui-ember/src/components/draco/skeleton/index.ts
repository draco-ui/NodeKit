import {
  DracoSkeletonSizeValues,
  DracoSkeletonAnimationValues
} from "./types.ts";
import { assert } from "@ember/debug";
import Component from "@glimmer/component";

import type {
  DracoSkeletonSizes,
  DracoSkeletonAnimations
} from "./types.ts";

export const DEFAULT_SIZE = DracoSkeletonSizeValues.Medium;
export const DEFAULT_ANIMATION = DracoSkeletonAnimationValues.Shimmer;

export const AVAILABLE_SIZES: string[] = Object.values(DracoSkeletonSizeValues);
export const AVAILABLE_ANIMATIONS: string[] = Object.values(DracoSkeletonAnimationValues);

export interface DracoSkeletonSignature {
  Args: {
    width?: number;
    height?: number;
    size?: DracoSkeletonSizes | number;
    animation?: DracoSkeletonAnimations;
  }
};

export default class DracoSkeleton extends Component<DracoSkeletonSignature> {
  get size(): DracoSkeletonSizes | number {
    const { size = DEFAULT_SIZE } = this.args;

    assert(
      `@size for "Draco::Skeleton" must be a number or one of the following: ${AVAILABLE_SIZES.join(
        ', '
      )}; received: ${this.args.size}`,
      typeof size === 'number' || AVAILABLE_SIZES.includes(size)
    );

    return size;
  }

  get animation(): DracoSkeletonAnimations {
    const { animation = DEFAULT_ANIMATION } = this.args;

    return animation;
  }

  get classNames(): string {
    const classes = ['draco-skeleton'];

     // add a class based on the @size argument
     if (typeof this.size !== 'number') {
      classes.push(`draco-skeleton--size-${this.size}`);
     }

     // add animation classes
     classes.push(`draco-skeleton--animation-${this.animation}`);

    return classes.join(' ');
  }
}
