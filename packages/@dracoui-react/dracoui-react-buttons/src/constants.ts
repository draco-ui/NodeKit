/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
  ButtonSizeValues,
  ButtonShapeValues,
  ButtonVariantValues,
  ButtonAlignmentValues
} from '@dracoui-types/buttons';

/**
 * Default values for Button component
 * Shared between CVA defaultVariants and defu defaults
 */
export const BUTTON_DEFAULT_PROPS = {
  asChild: false,
  depth: false,
  iconOnly: false,
  depthDirection: 'right',
  size: ButtonSizeValues.Medium,
  shape: ButtonShapeValues.Rounded,
  variant: ButtonVariantValues.Primary,
  alignment: ButtonAlignmentValues.Center
} as const;

export const BUTTON_DEFAULT_NAME: string = 'Button' as const;

/**
 * Default values for ToggleButton component
 * Shared between CVA defaultVariants and defu defaults
 */
export const TOGGLE_BUTTON_DEFAULT_PROPS = {
  defaultSelected: false,
  size: ButtonSizeValues.Medium,
  shape: ButtonShapeValues.Rounded,
  variant: ButtonVariantValues.Primary,
} as const;

export const TOGGLE_BUTTON_DEFAULT_NAME: string = 'ToggleButton' as const;
