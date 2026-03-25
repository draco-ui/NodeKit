import cn from 'clsx';
import { forwardRef, useContext, cloneElement, isValidElement } from 'react';

import { PopoverContext } from './Popover';
import type { ForwardedRef, ReactElement, ReactNode, MouseEventHandler } from 'react';
import type { PopoverTriggerProps } from './PopoverTrigger.types';

export const PopoverTrigger = forwardRef<HTMLElement, PopoverTriggerProps>(
  (
    { className, children, asChild = false, onMouseEnter, onMouseLeave, onClick, ...rest },
    ref: ForwardedRef<HTMLElement>
  ): ReactElement => {
    const ctx = useContext(PopoverContext);
    if (!ctx) throw new Error('PopoverTrigger must be used within Popover');

    const { toggle, open, close, triggerRef, openOnHover } = ctx;

    const setRef = (node: HTMLElement | null) => {
      if (typeof ref === 'function') ref(node);
      else if (ref && 'current' in ref) (ref as any).current = node;
      triggerRef.current = node;
    };

    const handleMouseEnter: MouseEventHandler<HTMLElement> = (e) => {
      onMouseEnter?.(e);
      if (openOnHover) open();
    };

    const handleMouseLeave: MouseEventHandler<HTMLElement> = (e) => {
      onMouseLeave?.(e);
      if (openOnHover) close();
    };

    if (asChild && isValidElement(children)) {
      const child = children as ReactElement<any>;
      const childRef = (child as any).ref;

      const attachRef = (node: HTMLElement | null) => {
        setRef(node);
        if (typeof childRef === 'function') childRef(node);
        else if (childRef && 'current' in childRef) (childRef as any).current = node;
      };

      return cloneElement(child, {
        ref: attachRef,
        className: cn('DracoPopoverTrigger', child.props.className, className),
        onClick: (e: any) => {
          child.props.onClick?.(e);
          toggle();
        },
        onMouseEnter: (e: any) => {
          child.props.onMouseEnter?.(e);
          handleMouseEnter(e);
        },
        onMouseLeave: (e: any) => {
          child.props.onMouseLeave?.(e);
          handleMouseLeave(e);
        },
        'aria-haspopup': 'dialog',
        'aria-expanded': ctx.isOpen || false,
      });
    }

    return (
      <button
        ref={setRef as any}
        data-popover-trigger
        aria-haspopup="dialog"
        aria-expanded={ctx.isOpen || false}
        className={cn('DracoPopoverTrigger', className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={(e) => {
          onClick?.(e as any);
          toggle();
        }}
        {...rest}
      >
        {children as ReactNode}
      </button>
    );
  }
);

PopoverTrigger.displayName = 'PopoverTrigger';
