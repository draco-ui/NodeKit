/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { cva } from 'class-variance-authority';

import { INDICATOR_DEFAULT_PROPS } from '../../constants';

export const indicatorVariants = cva('DracoIndicator', {
  variants: {
    size: {
      small: 'DracoIndicator--Small',
      medium: 'DracoIndicator--Medium',
      large: 'DracoIndicator--Large',
    },
    variant: {
      default: 'DracoIndicator--Default',
      secondary: 'DracoIndicator--Secondary',
    },
  },
  defaultVariants: {
    size: INDICATOR_DEFAULT_PROPS.size,
    variant: INDICATOR_DEFAULT_PROPS.variant,
  },
});
