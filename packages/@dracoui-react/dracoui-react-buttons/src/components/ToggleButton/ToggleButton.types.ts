/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { ComponentPropsWithoutRef, ReactNode } from 'react';

/**
 * ToggleButton variant — only primary and secondary are supported.
 */
export type ToggleButtonVariant = 'primary' | 'secondary' | 'ghost';

/**
 * ToggleButton size — same sizing scale as Button.
 */
export type ToggleButtonSize = 'small' | 'medium' | 'large';

/**
 * ToggleButton shape — same shape options as Button.
 */
export type ToggleButtonShape = 'rounded' | 'pill';

/**
 * React-specific ToggleButton props
 */
export interface ToggleButtonProps extends Omit<ComponentPropsWithoutRef<'button'>, 'onChange'> {
  /**
   * Visual variant of the toggle button
   * @default 'primary'
   */
  variant?: ToggleButtonVariant;

  /**
   * Size of the toggle button
   * @default 'medium'
   */
  size?: ToggleButtonSize;

  /**
   * Shape of the toggle button
   * @default 'rounded'
   */
  shape?: ToggleButtonShape;

  /**
   * Whether the toggle button is currently selected (controlled).
   */
  isSelected?: boolean;

  /**
   * Whether the toggle button is selected by default (uncontrolled).
   * @default false
   */
  defaultSelected?: boolean;

  /**
   * Handler called when the selection state changes.
   */
  onChange?: (isSelected: boolean) => void;

  /**
   * Whether the toggle button is disabled.
   * @default false
   */
  disabled?: boolean;

  /**
   * Button content
   */
  children?: ReactNode;
}
