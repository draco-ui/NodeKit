/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { IndicatorSizeValues, IndicatorVariantValues } from '@dracoui-types/indicator';

export const INDICATOR_DEFAULT_PROPS = {
  value: 0,
  min: 0,
  max: 100,
  segments: 10,
  size: IndicatorSizeValues.Medium,
  variant: IndicatorVariantValues.Default,
} as const;
