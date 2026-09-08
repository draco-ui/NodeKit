/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { ReactNode, ComponentPropsWithoutRef } from 'react';
import type { TooltipOptions } from '@dracoui-types/tooltip';

export interface TooltipProps
  extends Omit<TooltipOptions, 'hideDelay' | 'showDelay' | 'visible'>,
    Omit<ComponentPropsWithoutRef<'div'>, 'content'> {
  /**
   * The trigger element
   */
  children: ReactNode;

  /**
   * Tooltip content
   */
  content: ReactNode;

  /**
   * Delay in ms before showing
   * @default 250
   */
  delay?: number;

  /**
   * Delay in ms before hiding
   * @default 250
   */
  closeDelay?: number;

  /**
   * Whether tooltip is disabled
   * @default false
   */
  isDisabled?: boolean;

  /**
   * Placement relative to trigger
   * @default 'top'
   */
  placement?: 'top' | 'bottom' | 'left' | 'right';
}
