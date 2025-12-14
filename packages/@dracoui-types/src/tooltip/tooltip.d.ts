/**
 * Framework-agnostic Label types for Draco UI
 * Can be used across React, Vue, Ember, and other frameworks
 */

import { TooltipSizeValues} from './sizes.d';
import { TooltipVariantValues } from './variants.d';
import { TooltipPositionValues } from './positions.d';

import type { TooltipSizes } from './sizes.d';
import type { TooltipVariants } from './variants.d';
import type { TooltipPositions } from "./positions.d";

/**
 * Base Label properties (framework-agnostic)
 * These are the core props that any framework adapter can extend
 */
interface TooltipOptions {
  /**
   * Size for the tooltip
   * @default 'medium'
   */
  size?: TooltipSizes

  /**
   * Visual variant of the tooltip
   * @default 'normal'
   */
  variant?: TooltipVariants;

  /**
   * Delay before the tooltip is hidden, in milliseconds.
   * @default '250'
   */
  hideDelay?: number;

  /**
   * The position of tooltip relative to mount element.
   * @default 'top'
   */
  position?: TooltipPositions;

  /**
   * Delay before the tooltip is shown, in milliseconds.
   * @default '250'
   */
  showDelay?: number;

  /**
   * Control tooltip visibility programmatically.
   * @default 'true'
   */
  visible?: boolean;

  /**
   * Render an arrow pointing to the target element.
   * @default 'false'
   */
  withArrow?: boolean;

  /**
   * The offset (in pixels) between the tooltip and the trigger element.
   * @default 8
   */
  offset?: number;
}

export { TooltipVariantValues, TooltipPositionValues, TooltipSizeValues };

export type { TooltipOptions, TooltipVariants, TooltipPositions, TooltipSizes };