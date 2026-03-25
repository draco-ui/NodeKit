/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { cva } from 'class-variance-authority';

import { TOGGLE_BUTTON_DEFAULT_PROPS } from '../../constants';

export const toggleButtonVariants = cva('DracoButton DracoToggleButton', {
  variants: {
    variant: {
      primary: 'DracoButton--Primary',
      secondary: 'DracoButton--Secondary',
      ghost: 'DracoButton--Ghost',
    },
    size: {
      small: 'DracoButton--Small',
      medium: 'DracoButton--Medium',
      large: 'DracoButton--Large',
    },
    shape: {
      pill: 'DracoButton--Pill',
      rounded: 'DracoButton--Rounded',
    },
  },
  defaultVariants: {
    variant: TOGGLE_BUTTON_DEFAULT_PROPS.variant,
    size: TOGGLE_BUTTON_DEFAULT_PROPS.size,
    shape: TOGGLE_BUTTON_DEFAULT_PROPS.shape,
  },
});
