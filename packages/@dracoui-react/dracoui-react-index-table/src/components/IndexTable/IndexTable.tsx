/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from '@tanstack/react-table';
import cn from 'clsx';
import { defu } from 'defu';
import invariant from 'tiny-invariant';
import { Children, forwardRef, useMemo, isValidElement } from 'react';

import { IndexTableContext } from '../../contexts';
import { INDEX_TABLE_DEFAULT_NAME, INDEX_TABLE_DEFAULT_PROPS } from '../../constants';

import type { IndexTableProps } from './IndexTable.types';
import type { ForwardedRef, ReactElement, ReactNode } from 'react';
import type { Table, ColumnDef, SortingState } from '@tanstack/react-table';
import type { IndexTableSortDirections } from '@dracoui-types/index-table';

export const IndexTable = forwardRef<HTMLDivElement, IndexTableProps>(
  (
    props: IndexTableProps,
    ref: ForwardedRef<HTMLDivElement>,
  ): ReactElement => {
    const {
      children,
      headings,
      itemCount,
      selectable,
      loading,
      hasZebraStriping,
      condensed,
      lastColumnSticky,
      sortColumnIndex,
      sortDirection,
      defaultSortDirection,
      onSort,
      selectedItemsCount,
      onSelectionChange,
      hasMoreItems,
      className,
      ...others
    } = defu(props, INDEX_TABLE_DEFAULT_PROPS) as typeof props;

    invariant(headings, 'IndexTable requires headings prop');
    invariant(itemCount !== undefined, 'IndexTable requires itemCount prop');

    const childArray = Children.toArray(children);
    const filterChildren = childArray.filter((child: ReactNode): boolean =>
      isValidElement(child) && (child.type as any)?.displayName === 'IndexFilters'
    );
    const rowChildren = childArray.filter((child: ReactNode): boolean =>
      isValidElement(child) && (child.type as any)?.displayName === 'IndexRow'
    );

    const columns: Array<ColumnDef<unknown>> = useMemo<ColumnDef<unknown>[]>(() => {
      return headings.map((heading, index): ColumnDef<unknown> => ({
        id: heading.id || `column-${index}`,
        header: heading.title,
        accessorKey: heading.id || `column-${index}`,
        meta: {
          alignment: heading.alignment || 'start',
          hidden: heading.hidden || false,
        },
      }));
    }, [headings]);

    const sorting: SortingState = useMemo<SortingState>(() => {
      if (sortColumnIndex === undefined || !sortDirection) return [];
      const column: ColumnDef<unknown> = columns[sortColumnIndex];
      return column ? [{ id: column.id as string, desc: sortDirection === 'descending' }] : [];
    }, [sortColumnIndex, sortDirection, columns]);

    const table: Table<unknown> = useReactTable({
      data: [],
      columns,
      state: { sorting },
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      manualSorting: true,
    });

    const handleSort = (index: number): void => {
      if (!onSort) {
        return;
      }

      const newDirection: IndexTableSortDirections =
        sortColumnIndex === index && sortDirection === 'ascending' ? 'descending' : 'ascending';
      onSort(index, newDirection);
    };

    return (
      <IndexTableContext.Provider
        value={{
          table,
          headings,
          selectable,
          condensed,
          hasZebraStriping,
        }}
      >
        <div
          ref={ref}
          className={cn('DracoIndexTable', className)}
          {...others}
        >
          {filterChildren}

          <div className="DracoIndexTable__Container">
            <table className="DracoIndexTable__Table">
              <thead className="DracoIndexTable__Thead">
                <tr className="DracoIndexTable__HeaderRow">
                  {selectable && (
                    <th className="DracoIndexTable__CheckboxCell">
                      <input
                        type="checkbox"
                        checked={selectedItemsCount === 'All' || selectedItemsCount === itemCount}
                        onChange={(e) => onSelectionChange?.('all', e.target.checked)}
                      />
                    </th>
                  )}

                  {headings.map((heading, index) => (
                    <th
                      key={heading.id || index}
                      className="DracoIndexTable__HeaderCell"
                      data-alignment={heading.alignment || 'start'}
                      data-hidden={heading.hidden}
                      data-sticky={lastColumnSticky && index === headings.length - 1}
                      onClick={() => handleSort(index)}
                    >
                      <span className="DracoIndexTable__HeaderContent">
                        {heading.title}
                        {sortColumnIndex === index && (
                          <span
                            className="DracoIndexTable__SortIndicator"
                            data-direction={sortDirection}
                          />
                        )}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="DracoIndexTable__Tbody">
                {rowChildren}
              </tbody>
            </table>
          </div>

          {loading && <div className="DracoIndexTable__LoadingOverlay" />}
        </div>
      </IndexTableContext.Provider>
    );
  }
);

IndexTable.displayName = INDEX_TABLE_DEFAULT_NAME;
