/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { ButtonOptions } from '@dracoui-types/buttons';
import type { Interpolation, Theme } from '@emotion/react';
import type { VariantProps } from 'class-variance-authority';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import { buttonVariants } from './Button.styles';

/**
 * cva's VariantProps types every variant as `T | null | undefined`, while
 * ButtonOptions (framework-agnostic) types the same props as `T | undefined`
 * (no null). Extending both directly triggers TS2320 ("not identical") purely
 * because of that `| null`. Stripping cva's null makes the shared keys identical,
 * so ButtonProps can extend both — and if the two ever drift (a key/union differs
 * between the types package and the cva config), TS2320 returns as a sync check.
 */
type ButtonVariantProps = {
  [K in keyof VariantProps<typeof buttonVariants>]?: NonNullable<
    VariantProps<typeof buttonVariants>[K]
  >;
};

/**
 * React-specific Button props.
 * Extends the framework-agnostic ButtonOptions plus the (null-stripped) cva
 * variant props and the native button attributes.
 */
export interface ButtonProps extends ButtonOptions, ButtonVariantProps, ComponentPropsWithoutRef<'button'> {
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
