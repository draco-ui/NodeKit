/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { InputSizeValues, InputVariantValues } from '@dracoui/types';

/**
 * Default values for Input component
 * Shared between CVA defaultVariants and defu defaults
 */
export const INPUT_DEFAULT_PROPS = {
  size: InputSizeValues.Medium,
  variant: InputVariantValues.Outline,
  fullWidth: false,
  disabled: false,
  readOnly: false,
  depth: false,
  depthDirection: 'right',
} as const;

export const INPUT_DEFAULT_NAME: string = 'Input' as const;
