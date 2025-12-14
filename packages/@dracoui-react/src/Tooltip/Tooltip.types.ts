import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { TooltipOptions } from '@dracoui/types';
import type { TooltipTriggerProps } from 'react-aria';
import type { Interpolation, Theme } from '@emotion/react';

export interface TooltipProps
  extends Omit<TooltipOptions, 'hideDelay' | 'showDelay' | 'visible'>,
    Omit<TooltipTriggerProps, 'children'>,
    Omit<ComponentPropsWithoutRef<'div'>, 'content'> {
  /**
   * Emotion CSS prop for custom styling
   */
  css?: Interpolation<Theme>;

  /**
   * The trigger element (e.g., button, span, div, etc.)
   */
  children: ReactNode;

  /**
   * Tooltip content
   */
  content: ReactNode;

  /**
   * Delay in milliseconds before showing the tooltip
   * @default 250
   */
  delay?: number;

  /**
   * Delay in milliseconds before hiding the tooltip
   * @default 250
   */
  closeDelay?: number;

  /**
   * Whether the tooltip behavior is disabled
   * @default false
   */
  isDisabled?: boolean;

  /**
   * Internal placement value (optional)
   */
  placement?: string;
}
