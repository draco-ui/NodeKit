/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { ReactNode, HTMLAttributes } from 'react';
import type { Interpolation, Theme } from '@emotion/react';

export type FieldSize = 'small' | 'medium' | 'large';
export type FieldOrientation = 'horizontal' | 'vertical';
export type FieldValidationState = 'none' | 'success' | 'warning' | 'error';

/**
 * Props that are passed to the child control of the Field
 */
export interface FieldControlProps {
  id?: string;
  'aria-labelledby'?: string;
  'aria-describedby'?: string;
  'aria-invalid'?: boolean;
  'aria-required'?: boolean;
}

/**
 * Field component props
 */
export interface FieldProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /**
   * The label associated with the field
   */
  label?: ReactNode;

  /**
   * Additional hint text below the field
   */
  hint?: ReactNode;

  /**
   * A message about the validation state
   */
  validationMessage?: ReactNode;

  /**
   * The icon associated with the validationMessage
   */
  validationMessageIcon?: ReactNode;

  /**
   * The Field's child can be a single form control, or a render function
   */
  children?: ReactNode | ((props: FieldControlProps) => ReactNode);

  /**
   * The orientation of the label relative to the field component
   * @default 'vertical'
   */
  orientation?: FieldOrientation;

  /**
   * The validationState affects the display of the validationMessage
   * @default 'error' when validationMessage is set; 'none' otherwise
   */
  validationState?: FieldValidationState;

  /**
   * Marks the Field as required
   */
  required?: boolean;

  /**
   * The size of the Field's label
   * @default 'medium'
   */
  size?: FieldSize;

  /**
   * Emotion CSS prop for custom styling
   */
  css?: Interpolation<Theme>;
}
