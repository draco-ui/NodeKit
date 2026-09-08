/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { TabsVariantValues } from './variants';

import type { TabOptions } from '../tab';
import type { TabsVariants } from './variants';

/**
 * Base Tabs properties (framework-agnostic)
 * These are the core props that any framework adapter can extend
 */
export interface TabsOptions {
  /**
   * Tab definitions for data-driven rendering
   */
  tabs?: TabOptions[];

  /**
   * Visual variant of the tabs
   * @default 'default'
   */
  variant?: TabsVariants;

  /**
   * ID of the currently selected tab
   */
  selected?: string;

  /**
   * Callback when the selected tab changes
   */
  onSelect?: (selectedId: string) => void;

  /**
   * Orientation of the tab list
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * Disable all tabs
   */
  isDisabled?: boolean;
}

export { TabsVariantValues };
export type { TabsVariants };
