/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { IndexRowTones } from './tones';
import type { IndexRowTypes } from './types';

export interface IndexRowOptions {
  /**
   * Unique identifier for the row
   */
  id: string;

  /**
   * Zero-indexed position of the row
   */
  position: number;

  /**
   * Whether the row is selected
   */
  selected?: boolean | 'indeterminate';

  /**
   * Whether the row is disabled for selection
   * @default false
   */
  disabled?: boolean;

  /**
   * Visual tone/status of the row
   */
  tone?: IndexRowTones;

  /**
   * Type of row
   * @default 'data'
   */
  rowType?: IndexRowTypes;

  /**
   * Accessible label for the row's checkbox
   */
  accessibilityLabel?: string;
}
