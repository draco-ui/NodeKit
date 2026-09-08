/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { IndicatorOptions } from '@dracoui-types/indicator';

export type { IndicatorSize, IndicatorVariant } from '@dracoui-types/indicator';

export interface IndicatorProps extends IndicatorOptions {
  /** Additional CSS class names. */
  className?: string;

  /**
   * Accessible label describing what the meter represents
   * (e.g. "CPU usage"). Applied as `aria-label`.
   */
  label?: string;
}
