/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export enum TooltipPositionValues {
  Above = 'above',
  AboveStart = 'above-start',
  AboveEnd = 'above-end',
  Below = 'below',
  BelowStart = 'below-start',
  BelowEnd = 'below-end',
  Before = 'before',
  BeforeTop = 'before-top',
  BeforeBottom = 'before-bottom',
  After = 'after',
  AfterTop = 'after-top',
  AfterBottom = 'after-bottom',
}

/**
 * Tooltip position type - string literal union
 */
export type TooltipPositions = `${TooltipPositionValues}`;
