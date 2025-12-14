/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { InputOptions } from '@dracoui/types';
import type { Interpolation, Theme } from '@emotion/react';
import type { SprocketInputProps } from '@sprocketui/react';

/**
 * Input component props - basic input without Field functionality
 */
export interface InputProps extends InputOptions, Omit<SprocketInputProps, 'size'> {
  /**
   * Emotion CSS prop for custom styling
   * @example
   * css={{ marginTop: '20px' }}
   */
  css?: Interpolation<Theme>;
}
