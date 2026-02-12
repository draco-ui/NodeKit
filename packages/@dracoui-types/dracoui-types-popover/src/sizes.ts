/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export enum PopoverSizeValues {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

/**
 * Popover size type - string literal union
 */
export type PopoverSizes = `${PopoverSizeValues}`;
