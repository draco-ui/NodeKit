/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { ReactNode } from 'react';
import type { GlobalNavItemProps } from '../Item/Item.types';

export interface GlobalNavSectionProps {
  title?: string;
  items: GlobalNavItemProps[];
  icon?: ReactNode;
  fill?: boolean;
  separator?: boolean;
  action?: SectionAction;
  rollup?: Rollup;
}

export interface SectionAction {
  icon: ReactNode;
  accessibilityLabel: string;
  onClick: () => void;
}

export interface Rollup {
  after: number;
  view: string;
  hide: string;
  activePath?: string;
}
