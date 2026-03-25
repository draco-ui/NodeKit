/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export enum ProgressBarSizeValues {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

/**
 * Progress bar size type - string literal union
 */
export type ProgressBarSize = `${ProgressBarSizeValues}`;
