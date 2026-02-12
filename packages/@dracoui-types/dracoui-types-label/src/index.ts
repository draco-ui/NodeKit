/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { LabelSizeValues } from './sizes';
import { LabelWeightValues } from './weights';

import type { LabelSizes } from './sizes';
import type { LabelWeights } from './weights';

/**
 * Base Label properties (framework-agnostic)
 * These are the core props that any framework adapter can extend
 */
interface LabelOptions {
  /**
   * Whether the label is disabled
   * Typically shown with reduced opacity and prevents interaction
   */
  disabled?: boolean;

  /**
   * Whether the field is required
   * Usually displays an asterisk (*) indicator
   */
  required?: boolean;

  /**
   * Visual size of the label text
   */
  size?: LabelSizes;

  /**
   * Font weight of the label text
   */
  weight?: LabelWeights;
}

export { LabelSizeValues, LabelWeightValues };
export type { LabelOptions, LabelSizes, LabelWeights };
