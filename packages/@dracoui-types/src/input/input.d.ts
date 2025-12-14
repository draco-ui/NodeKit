/**
 * Framework-agnostic Input types for Draco UI
 * Can be used across React, Vue, Ember, and other frameworks
 */

import { InputSizeValues } from './sizes.d';
import { InputVariantValues } from './variants.d';

import type { InputSizes } from './sizes.d';
import type { InputVariants } from './variants.d';

/**
 * Base Input properties (framework-agnostic)
 * These are the core props that any framework adapter can extend
 */
interface InputOptions {
  /**
   * Size of the input
   * @default 'medium'
   */
  size?: InputSizes;

  /**
   * Visual variant of the input
   * @default 'outline'
   */
  variant?: InputVariants;

  /**
   * Whether the input should take full width of its container
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Enables floating label behavior using the placeholder text
   * When true, the placeholder animates to the top border on focus/input (Material Design style)
   * @default false
   */
  floatingLabel?: boolean;

  /**
   * Whether the input should have a 3D depth/shadow effect
   * @default false
   */
  depth?: boolean;

  /**
   * Direction of the depth shadow
   * @default 'right'
   */
  depthDirection?: 'right' | 'center';
}

export { InputSizeValues, InputVariantValues };
export type { InputOptions, InputSizes, InputVariants };