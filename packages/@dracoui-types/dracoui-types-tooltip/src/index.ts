/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { TooltipSizeValues } from './sizes';
import { TooltipVariantValues } from './variants';
import { TooltipPositionValues } from './positions';

import type { TooltipSizes } from './sizes';
import type { TooltipVariants } from './variants';
import type { TooltipPositions } from './positions';

/**
 * Base Tooltip properties (framework-agnostic)
 * These are the core props that any framework adapter can extend
 */
interface TooltipOptions {
  /**
   * Size for the tooltip
   * @default 'medium'
   */
  size?: TooltipSizes;

  /**
   * Visual variant of the tooltip
   * @default 'normal'
   */
  variant?: TooltipVariants;

  /**
   * Delay before the tooltip is hidden, in milliseconds.
   * @default 250
   */
  hideDelay?: number;

  /**
   * The position of tooltip relative to mount element.
   * @default 'above'
   */
  position?: TooltipPositions;

  /**
   * Delay before the tooltip is shown, in milliseconds.
   * @default 250
   */
  showDelay?: number;

  /**
   * Control tooltip visibility programmatically.
   * @default true
   */
  visible?: boolean;

  /**
   * Render an arrow pointing to the target element.
   * @default false
   */
  withArrow?: boolean;

  /**
   * The offset (in pixels) between the tooltip and the trigger element.
   * @default 8
   */
  offset?: number;
}

export { TooltipSizeValues, TooltipVariantValues, TooltipPositionValues };
export type { TooltipOptions, TooltipSizes, TooltipVariants, TooltipPositions };
