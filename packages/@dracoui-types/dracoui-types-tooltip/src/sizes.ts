/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export enum TooltipSizeValues {
  Small = 'small',
  Medium = 'medium',
}

/**
 * Tooltip size type - string literal union
 */
export type TooltipSizes = `${TooltipSizeValues}`;
