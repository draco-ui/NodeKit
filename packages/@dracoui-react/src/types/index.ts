import type { ReactNode, HTMLAttributes, ButtonHTMLAttributes } from 'react';

/**
 * Base props that all components extend from
 */
export interface BaseProps {
  /** Additional CSS classes */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
  /** Children elements */
  children?: ReactNode;
}

/**
 * Common component sizes
 */
export type Size = 'small' | 'medium' | 'large';

/**
 * Common component variants/colors
 */
export type Variant = 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'error';

/**
 * Component props with HTML attributes
 */
export type ComponentPropsWithHTML<T = HTMLElement> = BaseProps & HTMLAttributes<T>;

/**
 * Button component props with HTML button attributes
 */
export type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;
