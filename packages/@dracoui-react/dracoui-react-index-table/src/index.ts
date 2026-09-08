/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { IndexTable as IndexTableRoot } from './components/IndexTable';
import { IndexRow } from './components/IndexRow';
import { IndexCell } from './components/IndexCell';
import { IndexFilters } from './components/IndexFilters';

export const IndexTable = Object.assign(IndexTableRoot, {
  Row: IndexRow,
  Cell: IndexCell,
  Filters: IndexFilters,
});

export { IndexRow, IndexCell, IndexFilters };

export type { IndexTableProps } from './components/IndexTable/IndexTable.types';
export type { IndexRowProps } from './components/IndexRow/IndexRow.types';
export type { IndexCellProps } from './components/IndexCell/IndexCell.types';
export type { IndexFiltersProps } from './components/IndexFilters/IndexFilters.types';
