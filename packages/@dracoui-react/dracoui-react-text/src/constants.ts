/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { TextSizeValues, TextTypeValues } from '@dracoui-types/text';

export const TEXT_DEFAULT_PROPS = {
  as: 'p',
  type: TextTypeValues.Body,
  size: TextSizeValues.Medium,
  breakWord: false,
  truncate: false,
  numeric: false,
  visuallyHidden: false,
} as const;

export const TEXT_DEFAULT_NAME: string = 'Text' as const;
