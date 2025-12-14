/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { cva } from 'class-variance-authority';
import { BADGE_DEFAULT_PROPS } from './Badge.constants';

export const badgeVariants = cva('draco-badge', {
  variants: {
    appearance: {
      filled: 'draco-badge--filled',
      ghost: 'draco-badge--ghost',
      outline: 'draco-badge--outline',
      tint: 'draco-badge--tint',
    },
    size: {
      tiny: 'draco-badge--tiny',
      'extra-small': 'draco-badge--extra-small',
      small: 'draco-badge--small',
      medium: 'draco-badge--medium',
      large: 'draco-badge--large',
      'extra-large': 'draco-badge--extra-large',
    },
    shape: {
      circular: 'draco-badge--circular',
      rounded: 'draco-badge--rounded',
      square: 'draco-badge--square',
    },
    color: {
      brand: 'draco-badge--brand',
      danger: 'draco-badge--danger',
      important: 'draco-badge--important',
      informative: 'draco-badge--informative',
      severe: 'draco-badge--severe',
      subtle: 'draco-badge--subtle',
      success: 'draco-badge--success',
      warning: 'draco-badge--warning',
    },
  },
  defaultVariants: {
    appearance: BADGE_DEFAULT_PROPS.appearance,
    size: BADGE_DEFAULT_PROPS.size,
    shape: BADGE_DEFAULT_PROPS.shape,
    color: BADGE_DEFAULT_PROPS.color,
  },
});
