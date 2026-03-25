/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export enum ProgressBarVariantValues {
  Default = 'default',
  Secondary = 'secondary',
}

/**
 * Progress bar variant type - string literal union
 */
export type ProgressBarVariant = `${ProgressBarVariantValues}`;
