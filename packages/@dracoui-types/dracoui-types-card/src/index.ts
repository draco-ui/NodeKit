/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { CardVariantValues } from './variants';
import { CardRoundedValues } from './rounded';

import type { CardVariants } from './variants';
import type { CardRounded } from './rounded';
import type { SpaceScale } from './spacing';

interface CardOptions {
  /**
   * The visual style of the card.
   * @default 'borderless'
   */
  variant?: CardVariants;

  /**
   * The border radius of the card.
   * @default 'large'
   */
  rounded?: CardRounded;

  /**
   * The spacing around the card content, using the Draco spacing scale.
   * @default '400'
   */
  padding?: SpaceScale;

  /**
   * Whether the card should have a hover effect (darkened background on hover).
   * @default false
   */
  hoverable?: boolean;

  /**
   * Whether the card should have a retro 3D depth effect (offset shadow with hover/active animation).
   * @default false
   */
  depth?: boolean;
}

export { CardVariantValues, CardRoundedValues };
export type { CardOptions, CardVariants, CardRounded, SpaceScale };
