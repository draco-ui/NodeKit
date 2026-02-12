/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { cva } from 'class-variance-authority';
import { POPOVER_DEFAULT_PROPS } from './constants';

export const popoverStyles = cva('draco-popover-surface', {
  variants: {
    variant: {
      normal: 'draco-popover-surface--normal',
      inverted: 'draco-popover-surface--inverted'
    },
    size: {
      small: 'draco-popover-surface--small',
      medium: 'draco-popover-surface--medium',
      large: 'draco-popover-surface--large'
    }
  },
  defaultVariants: {
    variant: POPOVER_DEFAULT_PROPS.variant,
    size: POPOVER_DEFAULT_PROPS.size
  }
});