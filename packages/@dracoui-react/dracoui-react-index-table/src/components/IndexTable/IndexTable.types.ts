/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { ReactNode } from 'react';
import type { IndexTableOptions } from '@dracoui-types/index-table';

export interface IndexTableProps extends IndexTableOptions {
  children?: ReactNode;
}