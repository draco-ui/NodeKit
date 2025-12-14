/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { cva } from 'class-variance-authority';
import { INPUT_DEFAULT_PROPS } from './constants';

export const inputVariants = cva('draco-input', {
  variants: {
    size: {
      small: 'draco-input--small',
      medium: 'draco-input--medium',
      large: 'draco-input--large',
    },
    variant: {
      outline: 'draco-input--outline',
      filled: 'draco-input--filled',
      underline: 'draco-input--underline',
    },
    fullWidth: {
      true: 'draco-input--full-width',
    },
    depth: {
      true: 'draco-input--depth',
    },
    depthDirection: {
      right: 'draco-input--depth-right',
      center: 'draco-input--depth-center',
    },
  },
  defaultVariants: {
    size: INPUT_DEFAULT_PROPS.size,
    variant: INPUT_DEFAULT_PROPS.variant,
    depthDirection: INPUT_DEFAULT_PROPS.depthDirection,
  },
});
