/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { ReactNode } from 'react';
import type { CardOptions } from '@dracoui-types/card';

export type { SpaceScale, CardVariants, CardRounded } from '@dracoui-types/card';

export interface CardProps extends CardOptions {
  /** The content to display inside the card. */
  children?: ReactNode;

  /** Additional CSS class names. */
  className?: string;
}
