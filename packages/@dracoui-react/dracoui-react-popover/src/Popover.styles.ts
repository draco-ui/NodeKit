/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { cva } from 'class-variance-authority';
import { POPOVER_DEFAULT_PROPS } from './constants';

export const popoverStyles = cva('DracoPopoverSurface', {
  variants: {
    variant: {
      normal: 'DracoPopoverSurface--Normal',
      inverted: 'DracoPopoverSurface--Inverted'
    },
    size: {
      small: 'DracoPopoverSurface--Small',
      medium: 'DracoPopoverSurface--Medium',
      large: 'DracoPopoverSurface--Large'
    }
  },
  defaultVariants: {
    variant: POPOVER_DEFAULT_PROPS.variant,
    size: POPOVER_DEFAULT_PROPS.size
  }
});
