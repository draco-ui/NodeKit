/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { IndexTableSortDirections } from './sort-directions';

export interface IndexTableOptions {
  /**
   * Total number of items in the table
   */
  itemCount: number;

  /**
   * Whether rows are selectable
   * @default true
   */
  selectable?: boolean;

  /**
   * Whether the table is in a loading state
   * @default false
   */
  loading?: boolean;

  /**
   * Current sort column index
   */
  sortColumnIndex?: number;

  /**
   * Current sort direction
   */
  sortDirection?: IndexTableSortDirections;

  /**
   * Default sort direction
   * @default 'descending'
   */
  defaultSortDirection?: IndexTableSortDirections;

  /**
   * Whether there are more items to load
   */
  hasMoreItems?: boolean;

  /**
   * Whether to show zebra striping
   * @default false
   */
  hasZebraStriping?: boolean;

  /**
   * Whether the last column should be sticky
   * @default false
   */
  lastColumnSticky?: boolean;

  /**
   * Whether to use condensed spacing
   * @default false
   */
  condensed?: boolean;
}
