/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ButtonSizeValues } from './sizes';
import { ButtonShapeValues } from './shapes';
import { ButtonVariantValues } from './variants';
import { ButtonAlignmentValues } from './alignments';

import type { ButtonSizes } from './sizes';
import type { ButtonShapes } from './shapes';
import type { ButtonVariants } from './variants';
import type { ButtonAlignments } from './alignments';

/**
 * Base Button properties (framework-agnostic)
 * These are the core props that any framework adapter can extend
 */
interface ButtonOptions {
  /**
   * Visual variant of the button
   * @default 'primary'
   */
  variant?: ButtonVariants;

  /**
   * Size of the button
   * @default 'medium'
   */
  size?: ButtonSizes;

  /**
   * Shape of the button
   * @default 'rounded'
   */
  shape?: ButtonShapes;

  /**
   * Alignment of the button
   * @default 'center'
   */
  alignment?: ButtonAlignments;

  /**
   * Whether the button should have a 3D depth/shadow effect.
   * @type {boolean}
   * @default false - Defaults to true when variant is "primary"
   */
  depth?: boolean;

  /**
   * Direction of the depth shadow
   * @default 'right'
   */
  depthDirection?: 'right' | 'center';

  /**
   * Whether the button should take full width of its container
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Whether the button is in a loading state
   * @default false
   */
  loading?: boolean;

  /**
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Optional label for childless rendering
   */
  label?: string;

  /**
   * Renders the button as a square icon-only button (equal width and height, no horizontal padding).
   * @default false
   */
  iconOnly?: boolean;
}

export { ButtonSizeValues, ButtonShapeValues, ButtonVariantValues, ButtonAlignmentValues };
export type { ButtonOptions, ButtonSizes, ButtonShapes, ButtonVariants, ButtonAlignments };
