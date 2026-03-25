/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import cn from 'clsx';
import { defu } from 'defu';
import { forwardRef, useRef } from 'react';
import { mergeRefs } from '@necto/mergers';
import { useProgressBar } from '@sprocketui-react/progress';

import { progressBarVariants } from './ProgressBar.styles';
import { PROGRESS_BAR_DEFAULT_PROPS } from '../../constants';

import type { ForwardedRef, ReactElement } from 'react';
import type { ProgressBarProps } from './ProgressBar.types';
import type { VariantProps } from 'class-variance-authority';

export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps & VariantProps<typeof progressBarVariants>>(
  (
    props: ProgressBarProps,
    ref: ForwardedRef<HTMLDivElement>
  ): ReactElement => {
    const {
      size,
      variant,
      className,
      ...others
    } = defu(props, PROGRESS_BAR_DEFAULT_PROPS ?? {});

    const internalRef = useRef<HTMLDivElement>(null);

    const { progressBarProps, percentage, isIndeterminate, isHung } = useProgressBar(
      others,
      internalRef
    );

    return (
      <div
        ref={mergeRefs(ref, internalRef)}
        {...progressBarProps}
        className={cn(className, progressBarVariants({ size, variant }))}
        data-hung={isHung ? 'true' : undefined}
        data-indeterminate={isIndeterminate ? 'true' : undefined}
      >
        <div
          className="DracoProgressBar__Fill"
          style={{ width: `${percentage * 100}%` }}
        />
      </div>
    );
  }
);
