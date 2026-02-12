/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export enum InputVariantValues {
  Outline = 'outline',
  Filled = 'filled',
  Underline = 'underline',
}

/**
 * Input variant type - string literal union
 */
export type InputVariants = `${InputVariantValues}`;
