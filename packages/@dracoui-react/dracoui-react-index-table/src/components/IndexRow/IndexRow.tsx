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
import { INDEX_ROW_DEFAULT_NAME, INDEX_ROW_DEFAULT_PROPS } from '../../constants';

import type { IndexRowProps } from './IndexRow.types';
import type { ForwardedRef, ReactElement } from 'react';

export const IndexRow = forwardRef<HTMLTableRowElement, IndexRowProps>(
  (
    props: IndexRowProps,
    ref: ForwardedRef<HTMLTableRowElement>,
  ): ReactElement => {
    const {
      children,
      id,
      position,
      selected,
      disabled,
      tone,
      rowType,
      accessibilityLabel,
      onSelect,
      className,
      ...others
    } = defu(props, INDEX_ROW_DEFAULT_PROPS) as typeof props;

    const context = useContext(IndexTableContext);
    invariant(context, 'IndexRow must be used within <IndexTable>');

    const { selectable, hasZebraStriping } = context;

    return (
      <tr
        ref={ref}
        data-id={id}
        data-position={position}
        data-selected={selected}
        data-disabled={disabled}
        data-tone={tone}
        data-row-type={rowType}
        aria-label={accessibilityLabel}
        data-zebra={hasZebraStriping && position % 2 === 1}
        className={cn('draco-index-table__row', className)}
        {...others}
      >
        {selectable && (
          <td className="draco-index-table__row-checkbox-cell">
            <input
              type="checkbox"
              checked={selected === true}
              disabled={disabled}
              onChange={(e) => onSelect?.(id, e.target.checked)}
              aria-label={accessibilityLabel}
            />
          </td>
        )}
        {children}
      </tr>
    );
  }
);

IndexRow.displayName = INDEX_ROW_DEFAULT_NAME;
