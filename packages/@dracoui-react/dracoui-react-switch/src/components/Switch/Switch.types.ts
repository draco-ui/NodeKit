/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { ReactNode } from 'react';

export type SwitchSize = 'small' | 'medium' | 'large';

export interface SwitchProps {
  /** Whether the switch is on. Provide this to control the component. */
  checked?: boolean;

  /** Initial on-state when the switch is uncontrolled. @default false */
  defaultChecked?: boolean;

  /** Whether the switch is disabled. */
  disabled?: boolean;

  /** The size of the switch. @default 'medium' */
  size?: SwitchSize;

  /**
   * Layout orientation. `'vertical'` stands the switch on end so it flips
   * up/down like a wall switch. @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';

  /**
   * Content shown on the "off" (left) cap. Pass a string, an icon, or `null`
   * for no label. @default 'OFF'
   */
  offLabel?: ReactNode;

  /**
   * Content shown on the "on" (right) cap. Pass a string, an icon, or `null`
   * for no label. @default 'ON'
   */
  onLabel?: ReactNode;

  /** Called with the new state whenever the switch is toggled. */
  onChange?(checked: boolean): void;

  /** Label rendered next to the switch. */
  label?: ReactNode;

  /** Additional CSS class names. */
  className?: string;

  /** The name attribute for the underlying input. */
  name?: string;

  /** The value attribute for the underlying input. */
  value?: string;

  /** Accessible label when no visible label is provided. */
  'aria-label'?: string;
}
