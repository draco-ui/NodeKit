/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { cva } from 'class-variance-authority';

import { BUTTON_DEFAULT_PROPS } from '../../constants';

export const buttonVariants = cva('DracoButton', {
  variants: {
    variant: {
      primary: 'DracoButton--Primary',
      secondary: 'DracoButton--Secondary',
      outline: 'DracoButton--Outline',
      tertiary: 'DracoButton--Tertiary',
      ghost: 'DracoButton--Ghost',
      amber: 'DracoButton--Amber',
      error: 'DracoButton--Error',
    },
    shape: {
      pill: 'DracoButton--Pill',
      square: 'DracoButton--Square',
      rounded: 'DracoButton--Rounded',
    },
    size: {
      xsmall: 'DracoButton--Xsmall',
      small: 'DracoButton--Small',
      medium: 'DracoButton--Medium',
      large: 'DracoButton--Large',
    },
    alignment: {
      start: 'DracoButton--AlignStart',
      center: 'DracoButton--AlignCenter',
      end: 'DracoButton--AlignEnd',
    },
    fullWidth: {
      true: 'DracoButton--FullWidth',
    },
    loading: {
      true: 'DracoButton--Loading',
    },
    depth: {
      true: 'DracoButton--Depth',
    },
    depthDirection: {
      right: 'DracoButton--DepthRight',
      center: 'DracoButton--DepthCenter',
    }
  },
  defaultVariants: {
    variant: BUTTON_DEFAULT_PROPS.variant,
    size: BUTTON_DEFAULT_PROPS.size,
    shape: BUTTON_DEFAULT_PROPS.shape,
    alignment: BUTTON_DEFAULT_PROPS.alignment,
    depthDirection: BUTTON_DEFAULT_PROPS.depthDirection,
  },
});
