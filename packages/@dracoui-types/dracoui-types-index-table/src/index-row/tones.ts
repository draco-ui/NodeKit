/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export enum IndexRowToneValues {
  Subdued = 'subdued',
  Success = 'success',
  Warning = 'warning',
  Critical = 'critical',
}

export type IndexRowTones = `${IndexRowToneValues}`;
