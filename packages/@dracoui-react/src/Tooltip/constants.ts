/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { TooltipVariantValues, TooltipSizeValues } from '@dracoui/types';

/**
 * Default values for Tooltip component
 * Shared between CVA defaultVariants and defu defaults
 */
export const TOOLTIP_DEFAULT_PROPS = {
  variant: TooltipVariantValues.Normal,
  size: TooltipSizeValues.Medium,
} as const;

export const TOOLTIP_DEFAULT_NAME: string = 'Tooltip' as const;
