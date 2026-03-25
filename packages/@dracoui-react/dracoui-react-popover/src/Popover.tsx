import { defu } from 'defu';
import { forwardRef, useCallback, useMemo, useRef, useState, createContext } from 'react';

import type { PopoverProps } from './Popover.types';
import type { ReactElement, ForwardedRef, RefObject } from 'react';
import type { Placement } from '@necto/popper';

type PopoverContextValue = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
  triggerRef: RefObject<HTMLElement | null>;
  openOnHover: boolean;
  withArrow: boolean;
  closeOnClickOutside: boolean;
  placement: Placement;
  offset: number;
  variant?: PopoverProps['variant'];
  size?: PopoverProps['size'];
};

export const PopoverContext = createContext<PopoverContextValue | null>(null);

/** Map DracoUI position names to necto popper placement names. */
function mapPositionToPlacement(position: string): Placement {
  const map: Record<string, Placement> = {
    'above': 'top',
    'above-start': 'top-start',
    'above-end': 'top-end',
    'below': 'bottom',
    'below-start': 'bottom-start',
    'below-end': 'bottom-end',
    'before': 'left',
    'before-top': 'left-start',
    'before-bottom': 'left-end',
    'after': 'right',
    'after-top': 'right-start',
    'after-bottom': 'right-end',
  };
  return map[position] ?? 'bottom';
}

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  (
    rawProps: PopoverProps,
    _forwardedRef: ForwardedRef<HTMLDivElement>
  ): ReactElement => {
    const props = defu(rawProps, {
      variant: 'normal',
      size: 'medium',
      position: 'below',
      withArrow: false,
      trapFocus: true,
      offset: 12,
      openOnHover: false,
      defaultOpen: false,
      closeOnClickOutside: true,
    } as unknown as Partial<PopoverProps>) as PopoverProps;

    const {
      children,
      className,
      onOpenChange,
      variant = 'normal',
      size = 'medium',
      position = 'below',
      withArrow = false,
      offset = 12,
      openOnHover = false,
      defaultOpen = false,
      closeOnClickOutside = true,
      open: controlledOpen,
      ...rest
    } = props;

    const triggerRef = useRef<HTMLElement | null>(null);

    // Support both controlled and uncontrolled open state
    const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
    const isOpen = controlledOpen !== undefined ? controlledOpen : uncontrolledOpen;

    const openPopover = useCallback(() => {
      setUncontrolledOpen(true);
      onOpenChange?.({ type: 'manual' } as any, { open: true });
    }, [onOpenChange]);

    const closePopover = useCallback(() => {
      setUncontrolledOpen(false);
      onOpenChange?.({ type: 'manual' } as any, { open: false });
    }, [onOpenChange]);

    const togglePopover = useCallback(() => {
      if (isOpen) closePopover();
      else openPopover();
    }, [isOpen, openPopover, closePopover]);

    const placement = useMemo(() => mapPositionToPlacement(position), [position]);

    const ctx: PopoverContextValue = useMemo(() => ({
      isOpen,
      open: openPopover,
      close: closePopover,
      toggle: togglePopover,
      triggerRef,
      openOnHover,
      withArrow,
      closeOnClickOutside,
      placement,
      offset,
      variant,
      size,
    }), [isOpen, openPopover, closePopover, togglePopover, openOnHover, withArrow, closeOnClickOutside, placement, offset, variant, size]);

    return (
      <PopoverContext.Provider value={ctx}>
        <div
          data-popover-root
          data-open={isOpen ? 'true' : 'false'}
          className={className}
          {...rest}
        >
          {children}
        </div>
      </PopoverContext.Provider>
    );
  }
);

Popover.displayName = 'Popover';
