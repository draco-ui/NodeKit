/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { TabsVariantValues } from '@dracoui-types/tabs';

export const TABS_DEFAULT_PROPS = {
  variant: TabsVariantValues.Default,
  orientation: 'horizontal',
  isDisabled: false,
} as const;

export const TABS_DEFAULT_NAME: string = 'Tabs' as const;
