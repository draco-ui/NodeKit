/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import cn from 'clsx';
import { forwardRef } from 'react';
import {
  SprocketTooltip,
  SprocketTooltipTrigger,
  SprocketTooltipContent,
  SprocketTooltipArrow,
} from '@sprocketui-react/tooltip';

import { tooltipVariants } from './Tooltip.styles';
import { TOOLTIP_DEFAULT_NAME } from '../../constants';

import type { TooltipProps } from './Tooltip.types';
import type { ForwardedRef, ReactElement } from 'react';
import type { VariantProps } from 'class-variance-authority';

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps & VariantProps<typeof tooltipVariants>>(
  (
    props: TooltipProps & VariantProps<typeof tooltipVariants>,
    ref: ForwardedRef<HTMLDivElement>
  ): ReactElement => {
    const {
      size = 'medium',
      variant = 'normal',
      children,
      content,
      className,
      delay = 250,
      closeDelay = 250,
      isDisabled = false,
      withArrow = false,
      placement = 'top',
      offset = 8,
    } = props;

    return (
      <SprocketTooltip.Root
        delay={delay}
        closeDelay={closeDelay}
        isDisabled={isDisabled}
      >
        <SprocketTooltipTrigger.Root asChild>
          {children as ReactElement}
        </SprocketTooltipTrigger.Root>

        <SprocketTooltipContent.Root
          ref={ref}
          placement={placement}
          offset={offset}
          className={cn(tooltipVariants({ variant, size }), className)}
        >
          {withArrow && <SprocketTooltipArrow.Root className="DracoTooltip__Arrow" />}
          {content}
        </SprocketTooltipContent.Root>
      </SprocketTooltip.Root>
    );
  }
);

Tooltip.displayName = TOOLTIP_DEFAULT_NAME;
