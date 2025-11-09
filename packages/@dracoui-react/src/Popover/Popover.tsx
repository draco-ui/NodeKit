import cn from 'clsx';
import { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Popover as AriaPopover } from 'react-aria-components';

import type { PopoverProps } from './Popover.types';
import type { FC, ForwardedRef, ReactElement } from 'react';

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  (
    props: PopoverProps,
    ref: ForwardedRef<HTMLDivElement>
  ): ReactElement => {
    const {
      children,
      className,
      ...others
    } = props;

    return (
      <AriaPopover
        ref={ref}
        className={cn('draco-popover', className)}
        {...others}
      >
        {children}
      </AriaPopover>
    );
  }
);

(Popover as FC).displayName = 'Popover';

(Popover as FC).propTypes = {
  // Popover content (any React nodes)
  children: PropTypes.node,

  // Additional CSS classes to apply to the popover
  className: PropTypes.string,

  // Placement of the popover relative to the trigger
  placement: PropTypes.oneOf([
    'bottom',
    'bottom left',
    'bottom right',
    'bottom start',
    'bottom end',
    'top',
    'top left',
    'top right',
    'top start',
    'top end',
    'left',
    'left top',
    'left bottom',
    'start',
    'start top',
    'start bottom',
    'right',
    'right top',
    'right bottom',
    'end',
    'end top',
    'end bottom',
  ]),

  // Whether the popover should close when clicking outside
  shouldCloseOnInteractOutside: PropTypes.func,

  // Offset from the trigger element
  offset: PropTypes.number,

  // Whether to flip the popover when it would overflow
  shouldFlip: PropTypes.bool,
};
