/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { TextOptions } from '@dracoui-types/text';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

/**
 * React-specific Text props
 * Extends the framework-agnostic TextOptions with React-specific features
 */
export interface TextProps extends TextOptions, ComponentPropsWithoutRef<'span'> {
  /**
   * Text content
   */
  children?: ReactNode;
}
