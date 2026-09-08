/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export interface IndexFiltersTab {
  /**
   * Unique identifier for the tab
   */
  id: string;

  /**
   * Display text for the tab
   */
  content: string;

  /**
   * Index position of the tab
   */
  index: number;

  /**
   * Whether the tab is locked (cannot be deleted/renamed)
   * @default false
   */
  isLocked?: boolean;
}
