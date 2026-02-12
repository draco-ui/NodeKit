import {
  DracoSkeletonSizeValues,
  DracoSkeletonShapeValues,
  DracoSkeletonAnimationValues
} from "./types.ts";
import { assert } from "@ember/debug";
import Component from "@glimmer/component";

import type {
  DracoSkeletonSizes,
  DracoSkeletonShapes,
  DracoSkeletonAnimations,
} from "./types.ts";
import type Owner from '@ember/owner';

export const DEFAULT_SIZE = DracoSkeletonSizeValues.Medium;
export const DEFAULT_SHAPE = DracoSkeletonShapeValues.Circle;
export const DEFAULT_ANIMATION = DracoSkeletonAnimationValues.Shimmer;

export const AVAILABLE_SIZES: string[] = Object.values(DracoSkeletonSizeValues);
export const AVAILABLE_SHAPES: string[] =Object.values(DracoSkeletonShapeValues);
export const AVAILABLE_ANIMATIONS: string[] = Object.values(DracoSkeletonAnimationValues);

export interface DracoSkeletonSignature {
  Args: {
    isFullWidth?: boolean;
    width?: number | undefined;
    height?: number | undefined;
    shape?: DracoSkeletonShapes;
    size?: DracoSkeletonSizes | number;
    animation?: DracoSkeletonAnimations;
  }
};

export default class DracoSkeleton extends Component<DracoSkeletonSignature> {
  constructor(owner: Owner, args: DracoSkeletonSignature['Args']) {
    super(owner, args);

    const { size, width, height } = args;

    assert(
      `@size cannot be used simultaneously with @width or @height for "Draco::Skeleton"`,
      !(size !== undefined && (width !== undefined || height !== undefined))
    );
  }

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

    assert(
      `@animation for "Draco::Skeleton" must be one of the following: ${AVAILABLE_ANIMATIONS.join(
        ', '
      )}; received: ${this.args.size}`,
      AVAILABLE_ANIMATIONS.includes(animation)
    );

    return animation;
  }

  get width(): number | undefined {
    const { width } = this.args;

    if (width !== undefined) {
      assert(
        `@width for "Draco::Skeleton" must be a positive number; received: ${width}`,
        typeof width === 'number' && width > 0
      );
    }

    return width;
  }

  get height(): number | undefined {
    const { height } = this.args;

    if (height !== undefined) {
      assert(
        `@height for "Draco::Skeleton" must be a positive number; received: ${height}`,
        typeof height === 'number' && height > 0
      );
    }

    return height;
  }

  get shape(): DracoSkeletonShapes {
    const { shape = DEFAULT_SHAPE, height, width } = this.args;

    assert(
      `@shape for "Draco::Skeleton" must be one of the following: ${AVAILABLE_SHAPES.join(
        ', '
      )}; received: ${this.args.size}`,
      AVAILABLE_SHAPES.includes(shape)
    );

    return shape;
  }

  get isFullWidth(): boolean {
    const { isFullWidth = false } = this.args;

    assert(
      `@isFullWidth for "Draco::Skeleton" must be a 'boolean'; received: ${isFullWidth}`,
      typeof isFullWidth === 'boolean'
    );

    return isFullWidth;
  }

  get classNames(): string {
    const classes = ['draco-skeleton'];

     // add a class based on the @size argument
     if (typeof this.size !== 'number') {
      classes.push(`draco-skeleton--size-${this.size}`);
     }

     // add full width
     if (this.isFullWidth) {
      classes.push('draco-skeleton--width-full');
    }

    // add shape classes
    classes.push(`draco-skeleton--shape-${this.shape}`);

    // add animation classes
    classes.push(`draco-skeleton--animation-${this.animation}`);

    return classes.join(' ');
  }
}
