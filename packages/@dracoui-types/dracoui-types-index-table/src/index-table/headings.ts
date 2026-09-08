/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { IndexTableAlignments } from './alignments';

export interface IndexTableHeading {
  /**
   * Column title text
   */
  title: string;

  /**
   * Unique identifier for the heading
   */
  id?: string;

  /**
   * Alignment of the column content
   * @default 'start'
   */
  alignment?: IndexTableAlignments;

  /**
   * Whether this column should be hidden
   * @default false
   */
  hidden?: boolean;
}
