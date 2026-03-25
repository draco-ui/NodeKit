/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { cva } from 'class-variance-authority';

import { TEXT_DEFAULT_PROPS } from '../constants';

export const textVariants = cva('DracoText', {
  variants: {
    variant: {
      default: 'DracoText--Default',
      success: 'DracoText--Success',
      error: 'DracoText--Error',
    },
    type: {
      body: 'DracoText--Body',
      heading: 'DracoText--Heading',
    },
    size: {
      xs: 'DracoText--Xs',
      sm: 'DracoText--Sm',
      md: 'DracoText--Md',
      lg: 'DracoText--Lg',
      xl: 'DracoText--Xl',
      xxl: 'DracoText--Xxl',
    },
    fontWeight: {
      regular: 'DracoText--WeightRegular',
      medium: 'DracoText--WeightMedium',
      semibold: 'DracoText--WeightSemibold',
      bold: 'DracoText--WeightBold',
    },
    alignment: {
      start: 'DracoText--AlignStart',
      center: 'DracoText--AlignCenter',
      end: 'DracoText--AlignEnd',
      justify: 'DracoText--AlignJustify',
    },
    textDecorationLine: {
      underline: 'DracoText--DecorationUnderline',
      lineThrough: 'DracoText--DecorationLineThrough',
    },
    breakWord: {
      true: 'DracoText--BreakWord',
    },
    truncate: {
      true: 'DracoText--Truncate',
    },
    numeric: {
      true: 'DracoText--Numeric',
    },
  },
  defaultVariants: {
    variant: 'default',
    type: TEXT_DEFAULT_PROPS.type,
    size: TEXT_DEFAULT_PROPS.size,
  },
});
