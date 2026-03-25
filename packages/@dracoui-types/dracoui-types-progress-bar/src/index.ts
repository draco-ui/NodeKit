/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ProgressBarSizeValues } from './sizes';
import { ProgressBarVariantValues } from './variants';

import type { ProgressBarSize } from './sizes';
import type { ProgressBarVariant } from './variants';

interface ProgressBarOptions {
  /**
   * The size of the progress bar.
   * @default 'medium'
   */
  size?: ProgressBarSize;

  /**
   * The visual variant of the progress bar.
   * - 'default': always shows diagonal candy stripes
   * - 'secondary': secondary themed progress bar
   * @default 'default'
   */
  variant?: ProgressBarVariant;
}

export { ProgressBarSizeValues, ProgressBarVariantValues };
export type { ProgressBarOptions, ProgressBarSize, ProgressBarVariant };
