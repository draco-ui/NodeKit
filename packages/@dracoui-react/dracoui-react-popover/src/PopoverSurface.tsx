import { forwardRef, useContext, useLayoutEffect, useMemo } from 'react';
import cn from 'clsx';
import {
  flip,
  shift,
  autoUpdate,
  offset as offsetMiddleware,
} from '@necto/popper';
import {
  usePopper,
  useDismiss,
  useRole,
  useInteractions,
  useTransitionStyles,
  PopperPortal,
} from '@necto-react/popper';

import { PopoverContext } from './Popover';
import { popoverStyles } from './Popover.styles';

import type { ForwardedRef, ReactElement } from 'react';
import type { PopoverSurfaceProps } from './PopoverSurface.types';

export const PopoverSurface = forwardRef<HTMLDivElement, PopoverSurfaceProps>(
  (
    { className, style, tabIndex = -1, children, ...rest }: PopoverSurfaceProps,
    ref: ForwardedRef<HTMLDivElement>
  ): ReactElement | null => {
    const ctx = useContext(PopoverContext);
    if (!ctx) throw new Error('PopoverSurface must be used within Popover');

    const {
      isOpen,
      close,
      triggerRef,
      withArrow,
      closeOnClickOutside,
      placement,
      offset,
      variant = 'normal',
      size = 'medium',
    } = ctx;

    const middleware = useMemo(
      () => [offsetMiddleware(offset), flip(), shift({ padding: 8 })],
      [offset]
    );

    const { refs, floatingStyles, placement: finalPlacement, isPositioned } = usePopper({
      open: isOpen,
      placement,
      whileElementsMounted: autoUpdate,
      middleware,
    });

    // Sync the trigger element as the popper reference
    useLayoutEffect(() => {
      if (triggerRef?.current) {
        refs.setReference(triggerRef.current);
      }
    }, [triggerRef, refs, isOpen]);

    const dismiss = useDismiss({
      open: isOpen,
      onOpenChange: (open) => {
        if (!open && closeOnClickOutside) close();
      },
    });

    // Sync the trigger element to useDismiss's internal reference ref
    // so it correctly ignores clicks on the trigger (referencePress=false).
    // Without this, clicks on the trigger are treated as "outside" clicks,
    // causing dismiss to close and then toggle to immediately reopen.
    useLayoutEffect(() => {
      if (triggerRef?.current && dismiss.reference?.ref) {
        (dismiss.reference.ref as (node: Element | null) => void)(triggerRef.current);
      }
    }, [triggerRef, dismiss.reference, isOpen]);

    const role = useRole({
      open: isOpen,
      role: 'dialog',
    });

    const { getFloatingProps } = useInteractions([dismiss, role]);

    const { isMounted, styles: transitionStyles } = useTransitionStyles({
      open: isOpen,
      duration: 200,
      initial: { opacity: 0 },
      openStyles: { opacity: 1 },
    });

    const shouldRender = isMounted || isOpen;
    if (!shouldRender) return null;

    return (
      <PopperPortal>
        <div
          ref={(node) => {
            refs.setFloating(node);
            if (typeof ref === 'function') ref(node);
            else if (ref) ref.current = node;
          }}
          data-popover-surface
          data-open={isOpen ? 'true' : 'false'}
          data-placement={finalPlacement ?? ''}
          className={cn(popoverStyles({ variant, size }), className)}
          tabIndex={tabIndex}
          {...getFloatingProps()}
          {...rest}
          style={{
            ...floatingStyles,
            ...transitionStyles,
            // Hide until positioned to prevent flash at (0, 0)
            visibility: isPositioned ? 'visible' : 'hidden',
            zIndex: 99999,
            ...style,
          }}
        >
          {children}

          {withArrow && (
            <span
              aria-hidden="true"
              className={cn('DracoPopoverArrow')}
              style={{
                position: 'absolute',
                width: 12,
                height: 6,
              }}
            />
          )}
        </div>
      </PopperPortal>
    );
  }
);

PopoverSurface.displayName = 'PopoverSurface';
