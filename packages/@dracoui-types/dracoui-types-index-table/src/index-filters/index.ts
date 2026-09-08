/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { IndexFiltersTab } from './tabs';

export interface IndexFiltersOptions {
  /**
   * Filtering tabs
   */
  tabs?: IndexFiltersTab[]

  /**
   * Current search query value
   */
  query?: string;

  /**
   * Placeholder text for the search input
   */
  queryPlaceholder?: string;

  /**
   * Whether to disable the query/search field
   * @default false
   */
  disableQueryField?: boolean;

  /**
   * Whether to hide the query/search field entirely
   * @default false
   */
  hideQueryField?: boolean;
}
