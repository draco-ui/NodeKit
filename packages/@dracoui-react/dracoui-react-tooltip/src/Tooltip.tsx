/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import cn from 'clsx';
import { defu } from 'defu';
import React, { Fragment, forwardRef, useRef, useMemo, useState, useEffect } from 'react';
import { useTooltipTriggerState } from 'react-stately';
import { useTooltipTrigger, useTooltip, mergeProps, useOverlayPosition } from 'react-aria';
import { OverlayContainer } from 'react-aria';

import { tooltipVariants } from './Tooltip.styles';
import { TOOLTIP_DEFAULT_NAME, TOOLTIP_DEFAULT_PROPS } from './constants';

import type { TooltipProps } from './Tooltip.types';
import type { VariantProps } from 'class-variance-authority';
import type { ReactElement, ForwardedRef, RefObject } from 'react';

type TooltipComponentProps = TooltipProps & VariantProps<typeof tooltipVariants>;

const positionToPlacement = (position?: string): string => {
  const mapping: Record<string, string> = {
    'above': 'top',
    'above-start': 'top start',
    'above-end': 'top end',
    'below': 'bottom',
    'below-start': 'bottom start',
    'below-end': 'bottom end',
    'before': 'left',
    'before-top': 'left top',
    'before-bottom': 'left bottom',
    'after': 'right',
    'after-top': 'right top',
    'after-bottom': 'right bottom',
  };
  return mapping[position || 'above'] || 'top';
};

const TooltipComponent = (
  props: TooltipComponentProps,
  forwardedRef: ForwardedRef<HTMLElement>
): ReactElement => {
    const {
      variant,
      size,
      className,
      children,
      content,
      delay = 250,
      closeDelay = 250,
      isDisabled,
      withArrow = false,
      position = 'above',
      placement: placementProp,
      offset = 8,
      ...rest
    } = defu(props, TOOLTIP_DEFAULT_PROPS ?? {}) as TooltipProps & VariantProps<typeof tooltipVariants>;

    const state = useTooltipTriggerState({ delay, closeDelay, isDisabled });
    const triggerRef = useRef<HTMLElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    // Merge forwardedRef and triggerRef so both get updated
    const mergedTriggerRef = (node: HTMLElement | null) => {
      triggerRef.current = node;
      if (forwardedRef) {
        if (typeof forwardedRef === 'function') {
          forwardedRef(node);
        } else {
          (forwardedRef as RefObject<HTMLElement | null>).current = node;
        }
      }
    };

    const [isAnimating, setIsAnimating] = useState(false);
    const [shouldRender, setShouldRender] = useState(false);

    useEffect(() => {
      if (state.isOpen) {
        setShouldRender(true);
        requestAnimationFrame(() => setIsAnimating(true));
      } else {
        setIsAnimating(false);
        const timer = setTimeout(() => setShouldRender(false), 200);
        return () => clearTimeout(timer);
      }
    }, [state.isOpen]);

    const tooltipPlacement: string = useMemo(
      (): string => placementProp || positionToPlacement(position),
      [position, placementProp]
    );

    const { triggerProps, tooltipProps } = useTooltipTrigger(
      { delay, closeDelay, isDisabled },
      state,
      triggerRef
    );

    // Override trigger props to force close when leaving trigger
    // (by default, React Aria keeps tooltip open when hovering tooltip itself)
    const enhancedTriggerProps = {
      ...triggerProps,
      onPointerLeave: (e: React.PointerEvent) => {
        // Call original handler if exists
        if (triggerProps.onPointerLeave) {
          (triggerProps as any).onPointerLeave(e);
        }
        // Force close after a short delay (matches closeDelay)
        setTimeout(() => {
          state.close();
        }, closeDelay);
      },
    };

    const { tooltipProps: ariaTooltipProps } = useTooltip(tooltipProps, state);

    const { overlayProps, updatePosition } = useOverlayPosition({
      targetRef: triggerRef,
      overlayRef,
      placement: tooltipPlacement as any,
      offset,
      isOpen: state.isOpen,
    });

    const mergedOverlayProps = mergeProps(ariaTooltipProps, overlayProps);

    // Strip hover handlers from overlay props so hovering the tooltip itself
    // doesn't keep it open - only the trigger should control open/close
    const {
      onMouseEnter: _onMouseEnter,
      onMouseLeave: _onMouseLeave,
      onPointerEnter: _onPointerEnter,
      onPointerLeave: _onPointerLeave,
      ...overlayPropsWithoutHover
    } = mergedOverlayProps as any;

    useEffect(() => {
      if (!state.isOpen) return;
      updatePosition();
    }, [state.isOpen, updatePosition]);

    return (
      <Fragment>
        <span
          ref={triggerRef as any}
          {...enhancedTriggerProps}
          style={{
            display: 'block',
            margin: 0,
            padding: 0,
            border: 0,
            height: 'auto',
            lineHeight: 'normal',
            verticalAlign: 'middle',
          }}
        >
          {children}
        </span>

        {shouldRender && (
          <OverlayContainer>
            <div
              ref={overlayRef}
              {...overlayPropsWithoutHover}
              className={cn(
                tooltipVariants({ variant, size }),
                'draco-tooltip',
                isAnimating ? 'draco-tooltip--enter' : 'draco-tooltip--exit',
                className
              )}
              style={{
                ...overlayPropsWithoutHover.style,
                zIndex: 9999,
                pointerEvents: 'none', // Prevent tooltip from capturing hover
              }}
              {...rest}
            >
              {withArrow && <span>Arrow will be here</span>}
              {content}
            </div>
          </OverlayContainer>
        )}
      </Fragment>
    );
};

export const Tooltip = forwardRef(TooltipComponent as any) as React.ForwardRefExoticComponent<
  TooltipComponentProps & React.RefAttributes<HTMLElement>
>;

Tooltip.displayName = TOOLTIP_DEFAULT_NAME;

