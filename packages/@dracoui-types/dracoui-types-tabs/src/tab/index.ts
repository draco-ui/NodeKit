/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export interface TabOptions {
  /** Unique identifier for the tab element */
  id: string;

  /** Text label displayed inside the tab */
  content?: string;

  /** ID of the associated tab panel this tab controls */
  panelId?: string;

  /** Optional badge to display */
  badge?: string;

  /** Whether this tab is disabled */
  isDisabled?: boolean;
}
