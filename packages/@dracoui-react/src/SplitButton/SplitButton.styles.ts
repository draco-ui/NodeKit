/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { cva } from 'class-variance-authority';
import { SPLIT_BUTTON_DEFAULT_PROPS } from './SplitButton.constants';

export const splitButtonVariants = cva('draco-split-button', {
  variants: {
    variant: {
      primary: 'draco-split-button--primary',
      secondary: 'draco-split-button--secondary',
      tertiary: 'draco-split-button--tertiary',
      ghost: 'draco-split-button--ghost',
      amber: 'draco-split-button--amber',
      error: 'draco-split-button--error',
    },
    shape: {
      pill: 'draco-split-button--pill',
      square: 'draco-split-button--square',
      rounded: 'draco-split-button--rounded',
    },
    size: {
      xsmall: 'draco-split-button--xsmall',
      small: 'draco-split-button--small',
      medium: 'draco-split-button--medium',
      large: 'draco-split-button--large',
    },
    depth: {
      true: 'draco-split-button--depth',
    },
    depthDirection: {
      right: 'draco-split-button--depth-right',
      center: 'draco-split-button--depth-center',
    },
  },
  defaultVariants: SPLIT_BUTTON_DEFAULT_PROPS,
});