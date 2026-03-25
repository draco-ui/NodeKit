/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { ReactNode } from 'react';
import type { TabOptions, TabsVariants } from '@dracoui-types/tabs';

/**
 * React-specific Tab component props.
 * Extends the base TabOptions with props injected by the Tabs parent.
 */
export interface TabComponentProps extends TabOptions {
  /** Whether this tab is currently selected (injected by Tabs) */
  isSelected?: boolean;

  /** Visual variant (injected by Tabs) */
  variant?: TabsVariants;

  /** Selection callback (injected by Tabs) */
  onSelect?: () => void;

  /** Children for composed mode */
  children?: ReactNode;
}
