/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { css } from '@emotion/react';
import type { LabelSizes, LabelWeights } from '@dracoui/types';

export const getLabelStyles = (
  size?: LabelSizes,
  weight?: LabelWeights,
  disabled?: boolean,
  required?: boolean
) => css`
  &.draco-label {
    /* Size variants */
    ${size === 'small' && `font-size: var(--draco-label-size-small);`}
    ${size === 'medium' && `font-size: var(--draco-label-size-medium);`}
    ${size === 'large' && `font-size: var(--draco-label-size-large);`}

    /* Weight variants */
    ${weight === 'regular' && `font-weight: var(--draco-label-weight-regular);`}
    ${weight === 'semibold' && `font-weight: var(--draco-label-weight-semibold);`}

    /* Disabled state */
    ${disabled &&
    `
      opacity: 0.5;
      cursor: not-allowed;
    `}

    /* Required indicator */
    ${required &&
    `
      &::after {
        content: ' *';
        color: var(--draco-label-required-color, #d13438);
        margin-left: 2px;
      }
    `}
  }
`;
