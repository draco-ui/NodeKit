import type { ReactNode, Ref, JSX, ComponentPropsWithoutRef } from 'react';

/**
 * Popover surface props
 */
export interface PopoverSurfaceProps extends ComponentPropsWithoutRef<'div'> {
  /**
   * Content to display in the popover
   */
  children?: ReactNode;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * The element to render as
   * @default "div"
   */
  as?: keyof JSX.IntrinsicElements;

  /**
   * Ref to the HTMLDivElement
   */
  ref?: Ref<HTMLDivElement>;
}
