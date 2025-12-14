import cn from 'clsx';
import { forwardRef, useContext, cloneElement, isValidElement, useRef as useReactRef } from 'react';
import { useButton } from 'react-aria';

import { PopoverContext } from './Popover';
import type { ForwardedRef, ReactElement, ReactNode, MouseEventHandler } from 'react';
import type { PopoverTriggerProps } from './PopoverTrigger.types';

export const PopoverTrigger = forwardRef<HTMLElement, PopoverTriggerProps>(
  (
    { className, children, asChild = false, onMouseEnter, onMouseLeave, ...rest },
    ref: ForwardedRef<HTMLElement>
  ): ReactElement => {
    const ctx = useContext(PopoverContext);
    if (!ctx) throw new Error('PopoverTrigger must be used within Popover');

    const { state, triggerRef, onTriggerMouseEnter, onTriggerMouseLeave } = ctx;

    const setRef = (node: HTMLElement | null) => {
      if (typeof ref === 'function') ref(node);
      else if (ref && 'current' in ref) (ref as any).current = node;
      triggerRef.current = node;
    };

    const handleMouseEnter: MouseEventHandler<HTMLElement> = (e) => {
      onMouseEnter?.(e);
      onTriggerMouseEnter();
    };

    const handleMouseLeave: MouseEventHandler<HTMLElement> = (e) => {
      onMouseLeave?.(e);
      onTriggerMouseLeave();
    };

    const buttonRef = useReactRef<HTMLButtonElement>(null);
    const { buttonProps } = useButton(
      {
        onPress: () => state.toggle(),
        ...rest,
      },
      buttonRef
    );

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
        className: cn('draco-popover-trigger', child.props.className, className),
        onClick: (e: any) => {
          child.props.onClick?.(e);
          state.toggle();
        },
        onMouseEnter: (...args: any[]) => {
          child.props.onMouseEnter?.(...args);
          handleMouseEnter(args[0]);
        },
        onMouseLeave: (...args: any[]) => {
          child.props.onMouseLeave?.(...args);
          handleMouseLeave(args[0]);
        },
        'aria-haspopup': 'dialog',
        'aria-expanded': state.isOpen || false,
      });
    }

    const mergeRefs = (node: HTMLButtonElement | null) => {
      setRef(node);
      if (buttonRef) {
        if (typeof buttonRef === 'function') buttonRef(node);
        else (buttonRef as any).current = node;
      }
    };

    return (
      <button
        ref={mergeRefs}
        data-popover-trigger
        aria-haspopup="dialog"
        aria-expanded={state.isOpen || false}
        className={cn('draco-popover-trigger', className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...buttonProps}
      >
        {children as ReactNode}
      </button>
    );
  }
);

PopoverTrigger.displayName = 'PopoverTrigger';
