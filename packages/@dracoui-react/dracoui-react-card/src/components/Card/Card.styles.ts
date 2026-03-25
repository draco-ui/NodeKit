/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { cva } from 'class-variance-authority';

export const cardVariants = cva('DracoCard', {
  variants: {
    variant: {
      default: 'DracoCard--Default',
      borderless: 'DracoCard--Borderless',
      elevated: 'DracoCard--Elevated',
    },
    depth: {
      true: 'DracoCard--Depth DracoCard--DepthRight',
    },
  },
  defaultVariants: {},
});
