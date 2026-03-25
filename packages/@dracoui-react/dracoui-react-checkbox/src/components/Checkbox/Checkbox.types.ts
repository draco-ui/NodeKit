/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { ReactNode } from 'react';

export interface CheckboxProps {
  /** Whether the checkbox is checked. */
  checked?: boolean;

  /** Whether the checkbox is in an indeterminate state. */
  indeterminate?: boolean;

  /** Whether the checkbox is disabled. */
  disabled?: boolean;

  /** Callback when the checked state changes. */
  onChange?(checked: boolean): void;

  /** Label displayed next to the checkbox. */
  label?: ReactNode;

  /** Help text displayed below the label. */
  helpText?: ReactNode;

  /** Whether the checkbox is in an error state. */
  error?: boolean;

  /** Additional CSS class names. */
  className?: string;

  /** The name attribute for the input. */
  name?: string;

  /** The value attribute for the input. */
  value?: string;

  /** Accessible label when no visible label is provided. */
  'aria-label'?: string;
}
