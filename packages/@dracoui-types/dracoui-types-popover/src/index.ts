/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { PopoverSizeValues } from './sizes';
import { PopoverVariantValues } from './variants';
import { PopoverPositionValues } from './positions';

import type { PopoverSizes } from './sizes';
import type { PopoverVariants } from './variants';
import type { PopoverPositions } from './positions';

/**
 * Base Popover properties (framework-agnostic)
 * These are the core props that any framework adapter can extend
 */
interface PopoverOptions {
  /**
   * Visual variant of the popover
   * @default 'normal'
   */
  variant?: PopoverVariants;

  /**
   * Whether the popover is open by default.
   * @default false
   */
  defaultOpen?: boolean;

  /**
   * Render an arrow pointing to the target element.
   * @default false
   */
  withArrow?: boolean;

  /**
   * Controls the opening of the Popover.
   * @default false
   */
  open?: boolean;

  /**
   * Flag to open the Popover by hovering the trigger
   * @default false
   */
  openOnHover?: boolean;

  /**
   * The position of popover relative to the mount element.
   * @default 'below'
   */
  position?: PopoverPositions;

  /**
   * Size for the Popover
   * @default 'medium'
   */
  size?: PopoverSizes;

  /**
   * Should trap focus
   * @default false
   */
  trapFocus?: boolean;

  /**
   * The offset (in pixels) between the popover and the trigger element.
   * @default 12
   */
  offset?: number;

  /**
   * Close the popover when clicking outside of it.
   * @default true
   */
  closeOnClickOutside?: boolean;
}

/**
 * Popover surface options
 */
interface PopoverSurfaceOptions {
  as?: keyof HTMLElementTagNameMap;
}

/**
 * Popover trigger options
 */
interface PopoverTriggerOptions {}

export { PopoverSizeValues, PopoverVariantValues, PopoverPositionValues };
export type {
  PopoverOptions,
  PopoverSizes,
  PopoverVariants,
  PopoverPositions,
  PopoverSurfaceOptions,
  PopoverTriggerOptions,
};
