/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { BadgeAppearanceValues, BadgeSizeValues, BadgeShapeValues, BadgeColorValues } from '@dracoui/types';

/**
 * Default values for Badge component
 * Shared between CVA defaultVariants and defu defaults
 */
export const BADGE_DEFAULT_PROPS = {
  asChild: false,
  size: BadgeSizeValues.Medium,
  color: BadgeColorValues.Brand,
  shape: BadgeShapeValues.Circular,
  appearance: BadgeAppearanceValues.Filled,
} as const;

export const BADGE_DEFAULT_NAME: string = 'Badge' as const;
