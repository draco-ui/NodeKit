import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { css } from '@emotion/css';
import { cn } from '@/utils';

const inputWrapperVariants = cva('draco-input-wrapper', {
  variants: {
    size: {
      small: 'draco-input-wrapper--small',
      medium: 'draco-input-wrapper--medium',
      large: 'draco-input-wrapper--large',
    },
    error: {
      true: 'draco-input-wrapper--error',
    },
    disabled: {
      true: 'draco-input-wrapper--disabled',
    },
    fullWidth: {
      true: 'draco-input-wrapper--full-width',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

const inputVariants = cva('draco-input', {
  variants: {
    size: {
      small: 'draco-input--small',
      medium: 'draco-input--medium',
      large: 'draco-input--large',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
});

// Use emotion for minor custom styling if needed
const adornmentStyles = css`
  display: inline-flex;
  align-items: center;
  color: #6b7280;
  flex-shrink: 0;
`;

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  /**
   * Whether the input has an error
   * @default false
   */
  error?: boolean;

  /**
   * Whether the input should take full width
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Icon or element to display at the start of the input
   */
  startAdornment?: React.ReactNode;

  /**
   * Icon or element to display at the end of the input
   */
  endAdornment?: React.ReactNode;
}

/**
 * Input component for text entry
 *
 * Uses the global @dracoui/styles package for styling, with @emotion/css for minor customizations
 *
 * @example
 * ```tsx
 * <Input placeholder="Enter text..." />
 * <Input size="small" error />
 * ```
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      size,
      error = false,
      fullWidth = false,
      startAdornment,
      endAdornment,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const hasAdornments = startAdornment || endAdornment;

    if (hasAdornments) {
      return (
        <div className={cn(inputWrapperVariants({ size, error, disabled, fullWidth }))}>
          {startAdornment && <span className={adornmentStyles}>{startAdornment}</span>}
          <input
            ref={ref}
            className={cn(inputVariants({ size }), className)}
            disabled={disabled}
            {...props}
          />
          {endAdornment && <span className={adornmentStyles}>{endAdornment}</span>}
        </div>
      );
    }

    return (
      <input
        ref={ref}
        className={cn(inputVariants({ size }), className)}
        disabled={disabled}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
