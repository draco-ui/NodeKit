/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export enum ToggleButtonVariantValues {
  Primary = 'primary',
  Secondary = 'secondary',
  Ghost = 'ghost',
}

/**
 * ToggleButton variant type - string literal union
 */
export type ToggleButtonVariants = `${ToggleButtonVariantValues}`;
