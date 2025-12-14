import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import type { ButtonOptions } from '@dracoui/types';
import type { Interpolation, Theme } from '@emotion/react';

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