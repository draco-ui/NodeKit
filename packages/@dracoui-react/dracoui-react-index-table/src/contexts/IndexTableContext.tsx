/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { createContext } from 'react';

import type { Table } from '@tanstack/react-table';
import type { IndexTableHeading } from '@dracoui-types/index-table';

export interface IndexTableContextValue<TData = unknown> {
  table: Table<TData>;
  headings: IndexTableHeading[];
  selectable: boolean;
  condensed: boolean;
  hasZebraStriping: boolean;
}

export const IndexTableContext = createContext<IndexTableContextValue | null>(null);
