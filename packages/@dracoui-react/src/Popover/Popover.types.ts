import type { ReactNode } from 'react';
import type { PopoverProps as AriaPopoverProps } from 'react-aria-components';

/**
 * React-specific Popover props
 */
export interface PopoverProps extends Omit<AriaPopoverProps, 'children'> {
  /**
   * Popover content
   */
  children?: ReactNode;

  /**
   * Additional CSS classes to apply to the popover
   */
  className?: string;
}
