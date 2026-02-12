/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/**
 * Label font weight enum values for runtime validation and PropTypes
 */
export enum LabelWeightValues {
  Regular = 'regular',
  Semibold = 'semibold',
}

/**
 * Label font weight type - string literal union for TypeScript type checking
 */
export type LabelWeights = `${LabelWeightValues}`;
