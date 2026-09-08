/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { cva } from 'class-variance-authority';

import { PROGRESS_BAR_DEFAULT_PROPS } from '../../constants';

export const progressBarVariants = cva('DracoProgressBar', {
  variants: {
    size: {
      small: 'DracoProgressBar--Small',
      medium: 'DracoProgressBar--Medium',
      large: 'DracoProgressBar--Large',
    },
    variant: {
      default: 'DracoProgressBar--Default',
      secondary: 'DracoProgressBar--Secondary',
    },
  },
  defaultVariants: {
    size: PROGRESS_BAR_DEFAULT_PROPS.size,
  },
});
