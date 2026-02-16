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
import { INDEX_CELL_DEFAULT_NAME, INDEX_CELL_DEFAULT_PROPS } from '../../constants';

import type { ForwardedRef, ReactElement } from 'react';
import type { IndexCellProps } from './IndexCell.types';

export const IndexCell = forwardRef<HTMLTableCellElement, IndexCellProps>(
  (
    props: IndexCellProps,
    ref: ForwardedRef<HTMLTableCellElement>,
  ): ReactElement => {
    const {
      children,
      flush,
      colSpan,
      className,
      ...others
    } = defu(props, INDEX_CELL_DEFAULT_PROPS) as typeof props;

    const context = useContext(IndexTableContext);
    invariant(context, 'IndexCell must be used within <IndexTable>');

    return (
      <td
        ref={ref}
        className={cn('draco-index-table__cell', className)}
        data-flush={flush}
        colSpan={colSpan}
        {...others}
      >
        {children}
      </td>
    );
  }
);

IndexCell.displayName = INDEX_CELL_DEFAULT_NAME;
