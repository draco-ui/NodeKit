/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/**
 * Label size enum values for runtime validation and PropTypes
 */
export enum LabelSizeValues {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

/**
 * Label size type - string literal union for TypeScript type checking
 */
export type LabelSizes = `${LabelSizeValues}`;
