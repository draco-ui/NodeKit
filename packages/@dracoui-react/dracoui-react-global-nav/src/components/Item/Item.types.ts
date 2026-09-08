/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { ReactNode } from 'react';

export interface GlobalNavItemProps {
  url?: string;
  label: string;
  icon?: ReactNode;
  badge?: string | number;
  selected?: boolean;
  disabled?: boolean;
  new?: boolean;
  matches?: boolean;
  exactMatch?: boolean;
  matchPaths?: string[];
  excludePaths?: string[];
  truncateText?: boolean;
  subNavigationItems?: SubNavigationItem[];
  secondaryAction?: SecondaryAction;
  secondaryActions?: SecondaryAction[];
  displayActionsOnHover?: boolean;
  onClick?: () => void;
}

export interface SubNavigationItem {
  url: string;
  label: string;
  disabled?: boolean;
  new?: boolean;
  external?: boolean;
  matches?: boolean;
  exactMatch?: boolean;
  matchPaths?: string[];
  excludePaths?: string[];
  onClick?: () => void;
}

export interface SecondaryAction {
  url?: string;
  icon: ReactNode;
  accessibilityLabel: string;
  onClick?: () => void;
}
