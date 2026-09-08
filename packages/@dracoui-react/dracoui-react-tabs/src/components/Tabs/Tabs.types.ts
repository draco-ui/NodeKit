/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { ReactNode } from 'react';
import type { TabsOptions} from "@dracoui-types/tabs";
import type { SprocketTabsProps } from "@sprocketui-react/tabs";

export interface TabsProps extends TabsOptions, SprocketTabsProps {
  /**
   * Button content
   */
  children: ReactNode;
}
