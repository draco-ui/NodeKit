/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ToggleButtonVariantValues } from './variants';

import type { ToggleButtonVariants } from './variants';
import type { ButtonSizes } from '../button/sizes';
import type { ButtonShapes } from '../button/shapes';

/**
 * Base ToggleButton properties (framework-agnostic)
 * These are the core props that any framework adapter can extend
 */
interface ToggleButtonOptions {
  /**
   * Visual variant of the toggle button
   * @default 'primary'
   */
  variant?: ToggleButtonVariants;

  /**
   * Size of the toggle button
   * @default 'medium'
   */
  size?: ButtonSizes;

  /**
   * Shape of the toggle button
   * @default 'rounded'
   */
  shape?: ButtonShapes;

  /**
   * Whether the toggle button is selected
   * @default false
   */
  selected?: boolean;

  /**
   * Whether the toggle button is selected by default (uncontrolled)
   * @default false
   */
  defaultSelected?: boolean;

  /**
   * Whether the toggle button is disabled
   * @default false
   */
  disabled?: boolean;
}

export { ToggleButtonVariantValues };
export type { ToggleButtonOptions, ToggleButtonVariants };
