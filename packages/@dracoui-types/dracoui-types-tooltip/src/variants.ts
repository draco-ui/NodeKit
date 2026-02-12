/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export enum TooltipVariantValues {
  Normal = 'normal',
  Inverted = 'inverted',
}

/**
 * Tooltip variant type - string literal union
 */
export type TooltipVariants = `${TooltipVariantValues}`;
