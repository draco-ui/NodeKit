/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { PopoverVariantValues, PopoverSizeValues } from '@dracoui/types';

/**
 * Default values for Popover component
 * Shared between CVA defaultVariants and defu defaults
 */
export const POPOVER_DEFAULT_PROPS = {
  variant: PopoverVariantValues.Normal,
  size: PopoverSizeValues.Medium,
} as const;

export const POPOVER_DEFAULT_NAME: string = 'Popover' as const;
