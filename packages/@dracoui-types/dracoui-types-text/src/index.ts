/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { TextSizeValues } from './sizes';
import { TextTypeValues } from './types';
import { TextWeightValues } from './weights';
import { TextAlignmentValues } from './alignments';
import { TextVariantValues } from './variants';
import { TextDecorationValues } from './decorations';

import type { TextSizes } from './sizes';
import type { TextTypes } from './types';
import type { TextVariants } from './variants';
import type { TextWeights } from './weights';
import type { TextAlignments } from './alignments';
import type { TextDecorations } from './decorations';

export type TextElement = 'p' | 'span' | 'div' | 'label' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

/**
 * Configuration options for text styling and behavior
 */
export interface TextOptions {
  /**
   * The HTML element to render as
   * @default 'span'
   */
  as?: TextElement;

  /**
   * The color/semantic variant
   * @default 'default'
   */
  variant?: TextVariants;

  /**
   * The text type category
   */
  type: TextTypes;

  /**
   * The typographic size to apply to the text
   */
  size?: TextSizes;

  /**
   * The alignment of the text element
   */
  alignment?: TextAlignments;

  /**
   * The font weight to apply to the text
   */
  fontWeight?: TextWeights;

  /**
   * The text decoration line style to apply
   */
  textDecorationLine?: TextDecorations;

  /**
   * Whether to allow words to break and wrap to the next line
   * @default false
   */
  breakWord?: boolean;

  /**
   * Whether to truncate overflowing text with an ellipsis
   * @default false
   */
  truncate?: boolean;

  /**
   * Whether to apply font features optimized for numeric display
   * @default false
   */
  numeric?: boolean;

  /**
   * Whether to hide the text visually while keeping it accessible to screen readers
   * @default false
   */
  visuallyHidden?: boolean;
}

export { TextSizeValues, TextTypeValues, TextVariantValues, TextDecorationValues, TextWeightValues, TextAlignmentValues }
export type { TextSizes, TextTypes, TextVariants, TextDecorations, TextWeights, TextAlignments };
