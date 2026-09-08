/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import cn from 'clsx';
import { defu } from 'defu';
import { forwardRef } from 'react';

import { indicatorVariants } from './Indicator.styles';
import { INDICATOR_DEFAULT_PROPS } from '../../constants';

import type { ForwardedRef, ReactElement } from 'react';
import type { IndicatorProps } from './Indicator.types';
import type { VariantProps } from 'class-variance-authority';

/**
 * A segmented meter that lights up discrete bars to represent a level,
 * such as CPU, memory or disk usage. Renders with `role="meter"`.
 */
export const Indicator = forwardRef<HTMLDivElement, IndicatorProps & VariantProps<typeof indicatorVariants>>(
  (props: IndicatorProps, ref: ForwardedRef<HTMLDivElement>): ReactElement => {
    const {
      value,
      min,
      max,
      segments,
      size,
      variant,
      className,
      label,
      ...others
    } = defu(props, INDICATOR_DEFAULT_PROPS);

    // Clamp inputs so a malformed value/range can never break the render.
    const total = Math.max(1, Math.floor(segments));
    const range = max - min > 0 ? max - min : 1;
    const ratio = Math.min(1, Math.max(0, (value - min) / range));
    const activeCount = Math.round(ratio * total);

    return (
      <div
        ref={ref}
        role="meter"
        aria-label={label}
        aria-valuenow={value}
        aria-valuemin={min}
        aria-valuemax={max}
        data-active-count={activeCount}
        className={cn(className, indicatorVariants({ size, variant }))}
        {...others}
      >
        {Array.from({ length: total }, (_, index) => (
          <span
            key={index}
            className="DracoIndicator__Segment"
            data-active={index < activeCount ? 'true' : undefined}
            aria-hidden="true"
          />
        ))}
      </div>
    );
  }
);

Indicator.displayName = 'Indicator';
