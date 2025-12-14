/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { cva } from 'class-variance-authority';
import { BUTTON_DEFAULT_PROPS } from './constants';

export const buttonVariants = cva('draco-button', {
  variants: {
    variant: {
      primary: 'draco-button--primary',
      secondary: 'draco-button--secondary',
      tertiary: 'draco-button--tertiary',
      ghost: 'draco-button--ghost',
      amber: 'draco-button--amber',
      error: 'draco-button--error',
    },
    shape: {
      pill: 'draco-button--pill',
      square: 'draco-button--square',
      rounded: 'draco-button--rounded',
    },
    size: {
      xsmall: 'draco-button--xsmall',
      small: 'draco-button--small',
      medium: 'draco-button--medium',
      large: 'draco-button--large',
    },
    alignment: {
      start: 'draco-button--align-start',
      center: 'draco-button--align-center',
      end: 'draco-button--align-end',
    },
    fullWidth: {
      true: 'draco-button--full-width',
    },
    loading: {
      true: 'draco-button--loading',
    },
    depth: {
      true: 'draco-button--depth',
    },
    depthDirection: {
      right: 'draco-button--depth-right',
      center: 'draco-button--depth-center',
    },
    iconOnly: {
      true: 'draco-button--icon-only',
    },
  },
  defaultVariants: {
    variant: BUTTON_DEFAULT_PROPS.variant,
    size: BUTTON_DEFAULT_PROPS.size,
    shape: BUTTON_DEFAULT_PROPS.shape,
    alignment: BUTTON_DEFAULT_PROPS.alignment,
    depthDirection: BUTTON_DEFAULT_PROPS.depthDirection,
  },
});
