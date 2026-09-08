/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { IndicatorSizeValues } from './sizes';
import { IndicatorVariantValues } from './variants';

import type { IndicatorSize } from './sizes';
import type { IndicatorVariant } from './variants';

interface IndicatorOptions {
  /**
   * The current value of the indicator.
   * @default 0
   */
  value?: number;

  /**
   * The minimum value.
   * @default 0
   */
  min?: number;

  /**
   * The maximum value.
   * @default 100
   */
  max?: number;

  /**
   * How many discrete segments (bars) to render.
   * @default 10
   */
  segments?: number;

  /**
   * The size of the indicator.
   * @default 'medium'
   */
  size?: IndicatorSize;

  /**
   * The visual variant of the indicator.
   * - 'default': brand-colored bars
   * - 'secondary': neutral bars
   * @default 'default'
   */
  variant?: IndicatorVariant;
}

export { IndicatorSizeValues, IndicatorVariantValues };
export type { IndicatorOptions, IndicatorSize, IndicatorVariant };
