import cn from 'clsx';
import { If } from 'react-if';
import { Ring } from 'ldrs/react';
import { forwardRef } from 'react';
import { cva } from 'class-variance-authority';
// import { SprocketButton } from '@sprocketui-react/button';

import type { ButtonProps } from './Button.types';
import type { FC, ForwardedRef, ReactElement } from 'react';
import type { VariantProps } from 'class-variance-authority';

const buttonVariants = cva('draco-button', {
  variants: {
    variant: {
      primary: 'draco-button--primary',
      secondary: 'draco-button--secondary',
      tertiary: 'draco-button--tertiary',
      ghost: 'draco-button--ghost',
      amber: 'draco-button--amber',
      error: 'draco-button--error',
    },
    shape: {
      pill: 'draco-button--pill',
      square: 'draco-button--square',
      rounded: 'draco-button--rounded',
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
    elevated: {
      true: 'draco-button--elevated',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
    shape: 'rounded'
  },
});

export const Button = forwardRef<HTMLButtonElement, ButtonProps & VariantProps<typeof buttonVariants>>(
  (
    props: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ): ReactElement => {
    const {
      variant = 'primary',
      size = 'medium',
      shape = 'rounded',
      elevated = false,
      fullWidth,
      loading,
      children,
      className,
      disabled,
      ...others
    } = props;
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, shape, fullWidth, loading, elevated }), className)}
        disabled={disabled || loading || undefined}
        {...others}
      >
        <If condition={loading}>
          <Ring
            size="10"
            stroke="1"
            bgOpacity="0"
            speed="2"
            color="black"
          />
        </If>

        <If condition={!loading}>
          {children}
        </If>
      </button>
    );
  }
);

(Button as FC).displayName = 'Button';