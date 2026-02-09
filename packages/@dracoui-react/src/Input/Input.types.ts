/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { ReactElement } from 'react';
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

  /**
   * Element to render before the input content
   * @example
   * contentBefore={<SearchIcon />}
   */
  contentBefore?: ReactElement;

  /**
   * Element to render after the input content
   * @example
   * contentAfter={<ClearButton />}
   */
  contentAfter?: ReactElement;
}
