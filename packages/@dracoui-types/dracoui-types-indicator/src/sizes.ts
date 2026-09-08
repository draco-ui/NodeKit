/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export enum IndicatorSizeValues {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

/**
 * Indicator size type - string literal union
 */
export type IndicatorSize = `${IndicatorSizeValues}`;
