/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { ProgressBarOptions } from '@dracoui-types/progress-bar';

export type { ProgressBarSize } from '@dracoui-types/progress-bar';

export interface ProgressBarProps extends ProgressBarOptions {
  /** Additional CSS class names. */
  className?: string;
}
