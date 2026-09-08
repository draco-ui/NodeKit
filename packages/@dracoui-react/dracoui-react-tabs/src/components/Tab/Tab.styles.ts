/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { cva } from 'class-variance-authority';

import { TABS_DEFAULT_PROPS } from '../../constants';

export const tabVariants = cva('DracoTab', {
  variants: {
    variant: {
      default: 'DracoTab--Default',
      underline: 'DracoTab--Underline',
    },
    isSelected: {
      true: 'DracoTab--Selected',
    },
  },
  defaultVariants: {
    variant: TABS_DEFAULT_PROPS.variant,
  },
});
