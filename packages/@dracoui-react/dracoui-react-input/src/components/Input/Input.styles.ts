/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { cva } from 'class-variance-authority';
import { INPUT_DEFAULT_PROPS } from '../../constants';

export const inputVariants = cva('DracoInput', {
  variants: {
    size: {
      small: 'DracoInput--Small',
      medium: 'DracoInput--Medium',
      large: 'DracoInput--Large',
    },
    variant: {
      outline: 'DracoInput--Outline',
      filled: 'DracoInput--Filled',
      underline: 'DracoInput--Underline',
    },
    fullWidth: {
      true: 'DracoInput--FullWidth',
    },
    depth: {
      true: 'DracoInput--Depth',
    },
    depthDirection: {
      right: 'DracoInput--DepthRight',
      center: 'DracoInput--DepthCenter',
    },
  },
  defaultVariants: {
    size: INPUT_DEFAULT_PROPS.size,
    variant: INPUT_DEFAULT_PROPS.variant,
    depthDirection: INPUT_DEFAULT_PROPS.depthDirection,
  },
});
