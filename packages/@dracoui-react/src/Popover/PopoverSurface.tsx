// PopoverSurface.tsx
import { forwardRef, useContext, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import cn from 'clsx';
import { FocusScope } from 'react-aria';
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
      state,
      overlayRef,
      overlayProps,
      withArrow,
      closeOnClickOutside,
      triggerRef,
      variant = 'normal',
      size = 'medium',
      placement,
    } = ctx;

    const [isAnimating, setIsAnimating] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    // Manage animation state for smooth open/close transitions
    useEffect(() => {
      if (state.isOpen) {
        // Opening: render immediately and start animation
        setShouldRender(true);
        requestAnimationFrame(() => setIsAnimating(true));
      } else {
        // Closing: start exit animation, then unmount after animation completes
        setIsAnimating(false);
        const timer = setTimeout(() => setShouldRender(false), 250); // Match animation duration
        return () => clearTimeout(timer);
      }
    }, [state.isOpen]);

    const setRef = (node: HTMLDivElement | null) => {
      if (typeof ref === 'function') ref(node);
      else if (ref && 'current' in ref) (ref as any).current = node;
      overlayRef.current = node;
    };

    // Handle clicks outside the popover - manual implementation to avoid scroll issues
    useEffect(() => {
      if (!state.isOpen || !closeOnClickOutside) return;

      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Node;

        // Don't close if clicking inside the popover surface
        if (overlayRef.current && overlayRef.current.contains(target)) {
          return;
        }

        // Don't close if clicking the trigger
        if (triggerRef.current && triggerRef.current.contains(target)) {
          return;
        }

        // Close the popover
        state.close();
      };

      // Add listener on next tick to avoid immediate closing
      const timeoutId = setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
      }, 0);

      return () => {
        clearTimeout(timeoutId);
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [state.isOpen, closeOnClickOutside, state, overlayRef, triggerRef]);

    if (!shouldRender) return null;

    const content = (
      <FocusScope restoreFocus autoFocus>
        <div
          ref={setRef}
          data-popover-surface
          data-open={isAnimating ? 'true' : 'false'}
          data-placement={placement ?? ''}
          className={cn(popoverStyles({ variant, size }), className)}
          tabIndex={tabIndex}
          {...overlayProps}
          {...rest}
          style={{
            ...overlayProps.style,
            zIndex: 99999,
            ...style,
          }}
        >
          {children}

          {withArrow && (
            <span
              aria-hidden="true"
              className={cn('draco-popover-arrow')}
              style={{
                position: 'absolute',
                width: 12,
                height: 6,
              }}
            />
          )}
        </div>
      </FocusScope>
    );

    return createPortal(content, document.body);
  }
);

PopoverSurface.displayName = 'PopoverSurface';
