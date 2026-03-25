/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export enum ButtonVariantValues {
  Primary = 'primary',
  Outline = 'outline',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
  Ghost = 'ghost',
  Amber = 'amber',
  Error = 'error',
}

/**
 * Button variant type - string literal union
 */
export type ButtonVariants = `${ButtonVariantValues}`;