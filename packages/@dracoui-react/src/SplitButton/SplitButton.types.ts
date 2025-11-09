import type { ReactNode } from 'react';
import type { ButtonProps } from '../Button/Button.types';
import type { BaseButtonProps } from '@dracoui/types';

/**
 * Props for the primary action button (left side)
 */
export interface PrimaryActionButtonProps extends Partial<Omit<ButtonProps, 'children' | 'variant' | 'size' | 'shape' | 'elevated'>> {}

/**
 * Props for the menu trigger button (right side)
 */
export interface MenuButtonProps extends Partial<Omit<ButtonProps, 'children' | 'variant' | 'size' | 'shape' | 'elevated' | 'iconOnly'>> {}

/**
 * SplitButton component props
 */
export interface SplitButtonProps extends BaseButtonProps {
  /**
   * Content of the primary button (left side)
   */
  children?: ReactNode;

  /**
   * Props for the primary action button
   */
  primaryActionButton?: PrimaryActionButtonProps;

  /**
   * Props for the menu trigger button
   */
  menuButton?: MenuButtonProps;

  /**
   * Additional CSS classes to apply to the container
   */
  className?: string;
}
