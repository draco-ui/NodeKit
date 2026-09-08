/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export enum IndicatorVariantValues {
  Default = 'default',
  Secondary = 'secondary',
}

/**
 * Indicator variant type - string literal union
 */
export type IndicatorVariant = `${IndicatorVariantValues}`;
