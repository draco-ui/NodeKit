import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';
import type { Size, Variant } from '@/types';

const buttonVariants = cva('draco-button', {
  variants: {
    variant: {
      primary: 'draco-button--primary',
      secondary: 'draco-button--secondary',
      tertiary: 'draco-button--tertiary',
      success: 'draco-button--success',
      warning: 'draco-button--warning',
      error: 'draco-button--error',
    },
    size: {
      small: 'draco-button--small',
      medium: 'draco-button--medium',
      large: 'draco-button--large',
    },
    fullWidth: {
      true: 'draco-button--full-width',
    },
    loading: {
      true: 'draco-button--loading',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  /**
   * Icon to display before the button text
   */
  startIcon?: React.ReactNode;

  /**
   * Icon to display after the button text
   */
  endIcon?: React.ReactNode;
}

/**
 * Button component for user interactions
 *
 * Uses the global @dracoui/styles package for styling
 *
 * @example
 * ```tsx
 * <Button variant="primary" size="medium">
 *   Click me
 * </Button>
 * ```
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      size,
      fullWidth,
      loading,
      startIcon,
      endIcon,
      children,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, fullWidth, loading }), className)}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <span className="draco-button__loader" />}
        {!loading && startIcon && (
          <span className="draco-button__icon draco-button__icon--start">
            {startIcon}
          </span>
        )}
        {children && <span className="draco-button__text">{children}</span>}
        {!loading && endIcon && (
          <span className="draco-button__icon draco-button__icon--end">
            {endIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
