/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { cva } from 'class-variance-authority';
import { TOOLTIP_DEFAULT_PROPS } from './constants';

export const tooltipVariants = cva('draco-tooltip', {
  variants: {
    variant: {
      normal: 'draco-tooltip--normal',
      inverted: 'draco-tooltip--inverted'
    },
    size: {
      small: 'draco-tooltip--small',
      medium: 'draco-tooltip--medium'
    }
  },
  defaultVariants: {
    variant: TOOLTIP_DEFAULT_PROPS.variant,
    size: TOOLTIP_DEFAULT_PROPS.size
  }
});