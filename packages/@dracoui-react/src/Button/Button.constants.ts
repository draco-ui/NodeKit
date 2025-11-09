/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ButtonVariantValues, ButtonSizeValues, ButtonShapeValues } from '@dracoui/types';

/**
 * Default values for Button component
 * Shared between CVA defaultVariants and defu defaults
 */
export const BUTTON_DEFAULT_PROPS = {
  variant: ButtonVariantValues.Primary,
  size: ButtonSizeValues.Medium,
  shape: ButtonShapeValues.Rounded,
  elevated: false,
  asChild: false,
} as const;

export const BUTTON_DEFAULT_NAME: string = 'Button' as const;
