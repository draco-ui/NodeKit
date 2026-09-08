/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { ReactNode } from 'react';
import type { IndexRowOptions } from '@dracoui-types/index-table';

export interface IndexRowProps extends IndexRowOptions {
  children?: ReactNode;
  className?: string;
  onSelect?: (id: string, selected: boolean) => void;
}
