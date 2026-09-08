/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { ProgressBarSizeValues, ProgressBarVariantValues } from '@dracoui-types/progress-bar';

export const PROGRESS_BAR_DEFAULT_PROPS = {
  size: ProgressBarSizeValues.Medium,
  variant: ProgressBarVariantValues.Default,
} as const;
