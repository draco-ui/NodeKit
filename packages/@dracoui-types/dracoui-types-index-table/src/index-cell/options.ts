/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export interface IndexCellOptions {
  /**
   * Whether to remove cell padding
   * @default false
   */
  flush?: boolean;

  /**
   * Column span for subheader cells
   */
  colSpan?: number;
}
