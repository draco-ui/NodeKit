import type { ReactNode, ButtonHTMLAttributes, FocusEvent } from 'react';
import type { Interpolation, Theme } from '@emotion/react';
import type { BaseButtonProps } from '@dracoui/types';

/**
 * React-specific Button props
 * Extends the framework-agnostic BaseButtonProps with React-specific features
 */
export interface ButtonProps extends BaseButtonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'value' | 'onFocus' | 'onBlur' | 'onClick'> {
  /**
   * Emotion CSS prop for custom styling
   * Supports both object and template literal syntax
   * @example
   * css={{ marginTop: '20px' }}
   * css={css`margin-top: 20px;`}
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

  /**
   * Handler called when the button is clicked
   */
  onClick?: (e: React.MouseEvent<Element>) => void;

  /**
   * Handler called when the button receives focus
   */
  onFocus?: (e: FocusEvent<Element>) => void;

  /**
   * Handler called when the button loses focus
   */
  onBlur?: (e: FocusEvent<Element>) => void;
}