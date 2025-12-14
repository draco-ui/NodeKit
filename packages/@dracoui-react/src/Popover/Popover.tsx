import { forwardRef, useCallback, useEffect, useLayoutEffect, useMemo, useRef, createContext } from 'react';
import { useOverlayTriggerState } from 'react-stately';
import { useOverlayTrigger, useOverlayPosition, usePreventScroll } from 'react-aria';
import { defu } from 'defu';

import type { PopoverProps } from './Popover.types';
import type { ReactElement, ForwardedRef, RefObject } from 'react';

type PopoverContextValue = {
  state: ReturnType<typeof useOverlayTriggerState>;
  triggerRef: RefObject<HTMLElement | null>;
  overlayRef: RefObject<HTMLDivElement | null>;
  triggerProps: React.HTMLAttributes<HTMLElement>;
  overlayProps: React.HTMLAttributes<HTMLDivElement>;
  openOnHover: boolean;
  onTriggerMouseEnter: () => void;
  onTriggerMouseLeave: () => void;
  withArrow: boolean;
  closeOnClickOutside: boolean;
  variant?: PopoverProps['variant'];
  size?: PopoverProps['size'];
  placement?: string;
};

export const PopoverContext = createContext<PopoverContextValue | null>(null);

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  (
    rawProps: PopoverProps,
    _forwardedRef: ForwardedRef<HTMLDivElement>
  ): ReactElement => {
    const props = defu(rawProps, {
      variant: 'normal',
      size: 'medium',
      position: 'below', // map to React Aria "bottom"
      withArrow: false,
      trapFocus: true, // Default to preventing scroll
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
      trapFocus = false,
      offset = 12,
      openOnHover = false,
      defaultOpen = false,
      closeOnClickOutside = true,
      open,
      ...rest
    } = props;

    const triggerRef = useRef<HTMLElement | null>(null);
    const overlayRef = useRef<HTMLDivElement | null>(null);

    const state = useOverlayTriggerState({
      defaultOpen,
      isOpen: open,
      onOpenChange: (next) => {
        onOpenChange?.({ type: 'manual' } as any, { open: next });
      },
    });

    const { triggerProps } = useOverlayTrigger(
      { type: 'dialog' },
      state,
      // React Aria expects non-nullable RefObject types; cast here to satisfy typing
      triggerRef as any
    );

    const placement = useMemo(() => {
      switch (position) {
        // mapping from your options set to React Aria placements
        case 'above': return 'top';
        case 'above-start': return 'top start';
        case 'above-end': return 'top end';
        case 'below': return 'bottom';
        case 'below-start': return 'bottom start';
        case 'below-end': return 'bottom end';
        case 'before': return 'left';
        case 'before-top': return 'left top';
        case 'before-bottom': return 'left bottom';
        case 'after': return 'right';
        case 'after-top': return 'right top';
        case 'after-bottom': return 'right bottom';
        default: return 'bottom';
      }
    }, [position]);

    const { overlayProps: rawOverlayProps, placement: actualPlacement, updatePosition } = useOverlayPosition({
      targetRef: triggerRef as any,
      overlayRef: overlayRef as any,
      isOpen: state.isOpen,
      placement: placement as any,
      offset,
    });

    const { onScroll, onScrollCapture, onWheel, onWheelCapture, onTouchMove, onTouchMoveCapture, onPointerDown, onPointerDownCapture, onPointerMove, onPointerMoveCapture, ...overlayProps } = rawOverlayProps as any;

    // Run initial positioning before paint using useLayoutEffect to avoid
    // the overlay briefly landing at 0,0 on first render.
    useLayoutEffect(() => {
      if (!state.isOpen) return;

      // Try an immediate position update if refs are ready
      if (triggerRef.current && overlayRef.current) {
        try { updatePosition(); } catch { }
      }

      let r1: number = 0;
      let r2: number = 0;
      r1 = requestAnimationFrame((): void => {
        r2 = requestAnimationFrame((): void => {
          try { updatePosition(); } catch { }
        });
      });

      return (): void => {
        cancelAnimationFrame(r1);
        cancelAnimationFrame(r2);
      };
    }, [state.isOpen, children, updatePosition]);

    // Retry positioning for a few frames to handle late-mounting triggers
    // or layout shifts that happen immediately after open.
    useEffect(() => {
      if (!state.isOpen) return;

      let cancelled = false;
      let attempts = 0;

      const tryUpdate = () => {
        attempts++;
        if (triggerRef.current && overlayRef.current) {
          try { updatePosition(); } catch { }
        }

        // Retry for up to ~15 frames (~250ms) to allow layout to stabilize
        if (!cancelled && attempts < 15) {
          requestAnimationFrame(tryUpdate);
        }
      };

      requestAnimationFrame(tryUpdate);

      return () => { cancelled = true; };
    }, [state.isOpen, updatePosition]);

    usePreventScroll({ isDisabled: !state.isOpen || !trapFocus });

    useEffect(() => {
      if (!state.isOpen) return;

      const handleScroll = () => {
        // Just update position, don't close
        updatePosition();
      };

      window.addEventListener('scroll', handleScroll, true);
      return () => {
        window.removeEventListener('scroll', handleScroll, true);
      };
    }, [state.isOpen, updatePosition]);

    const onTriggerMouseEnter = useCallback(() => {
      if (!openOnHover) return;
      if (!state.isOpen) {
        state.open();
        onOpenChange?.({ type: 'hover' } as any, { open: true });
      }
    }, [openOnHover, state, onOpenChange]);

    const onTriggerMouseLeave = useCallback(() => {
      if (!openOnHover) return;
      if (state.isOpen) {
        state.close();
        onOpenChange?.({ type: 'hover' } as any, { open: false });
      }
    }, [openOnHover, state, onOpenChange]);

    const ctx: PopoverContextValue = {
      state,
      triggerRef,
      overlayRef,
      triggerProps,
      overlayProps,
      openOnHover,
      onTriggerMouseEnter,
      onTriggerMouseLeave,
      withArrow,
      closeOnClickOutside,
      variant,
      size,
      placement: actualPlacement ?? undefined,
    };

    return (
      <PopoverContext.Provider value={ctx}>
        <div
          data-popover-root
          data-open={state.isOpen ? 'true' : 'false'}
          data-placement={actualPlacement ?? ''}
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
