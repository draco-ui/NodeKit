/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export enum ButtonAlignmentValues {
  End = 'end',
  Start = 'start',
  Center = 'center'
}

/**
 * Button alignment type - string literal union
 */
export type ButtonAlignments = `${ButtonAlignmentValues}`;