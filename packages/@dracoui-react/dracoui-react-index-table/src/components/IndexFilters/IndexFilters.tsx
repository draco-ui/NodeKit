/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import cn from 'clsx';
import { defu } from 'defu';
import invariant from 'tiny-invariant';
import { forwardRef, useContext } from 'react';

import { IndexTableContext } from '../../contexts';
import { INDEX_FILTERS_DEFAULT_NAME, INDEX_FILTERS_DEFAULT_PROPS } from '../../constants';

import type { ForwardedRef, ReactElement } from 'react';
import type { IndexFiltersProps } from './IndexFilters.types';

export const IndexFilters = forwardRef<HTMLDivElement, IndexFiltersProps>(
  (
    props: IndexFiltersProps,
    ref: ForwardedRef<HTMLDivElement>,
  ): ReactElement => {
    const {
      query,
      onQueryChange,
      onQueryClear,
      placeholder,
      children,
      className,
      ...others
    } = defu(props, INDEX_FILTERS_DEFAULT_PROPS) as typeof props;

    const context = useContext(IndexTableContext);
    invariant(context, 'IndexFilters must be used within <IndexTable>');

    return (
      <div
        ref={ref}
        className={cn('DracoIndexTable__Filters', className)}
        {...others}
      >
        <div className="DracoIndexTable__SearchWrapper">
          <input
            type="text"
            className="DracoIndexTable__SearchInput"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder={placeholder}
          />
          {query && onQueryClear && (
            <button
              type="button"
              className="DracoIndexTable__ClearButton"
              onClick={onQueryClear}
            >
              ×
            </button>
          )}
        </div>
        {children}
      </div>
    );
  }
);

IndexFilters.displayName = INDEX_FILTERS_DEFAULT_NAME;
