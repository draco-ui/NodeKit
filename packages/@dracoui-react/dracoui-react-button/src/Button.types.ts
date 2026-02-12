/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */


import type { Interpolation, Theme } from '@emotion/react';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { ButtonOptions, ButtonAlignments } from '@dracoui-types/button';

/**
 * React-specific Button props
 * Extends the framework-agnostic BaseButtonProps with React-specific features
 */
export interface ButtonProps extends ButtonOptions, ComponentPropsWithoutRef<'button'> {
  /**
   * Emotion CSS prop for custom styling
   * Supports both object and template literal syntax
   */
  css?: Interpolation<Theme>;

  /**
   * Button content
   */
  children?: ReactNode;

  /**
   * Optional label for childrenless rendering
   */
  label?: string;

  /**
   * Alignment of button content (alias for align)
   * @default 'center'
   */
  alignment?: ButtonAlignments;

  /**
   * Changes the component to a Slot, merging its props with the child element.
   * Allows the Button to render as any element (e.g., <a>, <Link>) while maintaining Button styling and behavior.
   * @default false
   * @example
   * <Button asChild>
   *   <a href="/home">Go Home</a>
   * </Button>
   */
  asChild?: boolean;
}
