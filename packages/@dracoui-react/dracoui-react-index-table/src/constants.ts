/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export const INDEX_TABLE_DEFAULT_NAME: string = 'IndexTable' as const;

export const INDEX_TABLE_DEFAULT_PROPS = {
  selectable: true,
  loading: false,
  hasZebraStriping: false,
  condensed: false,
  lastColumnSticky: false,
  defaultSortDirection: 'descending',
  hasMoreItems: false,
} as const;

export const INDEX_ROW_DEFAULT_NAME: string = 'IndexRow' as const;

export const INDEX_ROW_DEFAULT_PROPS = {
  selected: false,
  disabled: false,
  rowType: 'data',
} as const;

export const INDEX_CELL_DEFAULT_NAME: string = 'IndexCell' as const;

export const INDEX_CELL_DEFAULT_PROPS = {
  flush: false,
} as const;

export const INDEX_FILTERS_DEFAULT_NAME: string = 'IndexFilters' as const;

export const INDEX_FILTERS_DEFAULT_PROPS = {
  placeholder: 'Search...',
} as const;
