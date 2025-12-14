import cn from 'clsx';
import { defu } from 'defu';
import { Ring } from 'ldrs/react';
import { forwardRef } from 'react';
import { SprocketButton } from '@sprocketui/react';
import { Primitive } from '@necto-react/components';

import { buttonVariants } from './Button.styles';
import { BUTTON_DEFAULT_PROPS, BUTTON_DEFAULT_NAME } from './constants';

import type { ButtonProps } from './Button.types';
import type { ForwardedRef, ReactElement } from 'react';
import type { VariantProps } from 'class-variance-authority';

export const Button = forwardRef<HTMLButtonElement, ButtonProps & VariantProps<typeof buttonVariants>>(
  (
    props: ButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ): ReactElement => {
    const {
      variant,
      size,
      shape,
      alignment,
      depth,
      depthDirection,
      fullWidth,
      loading,
      iconOnly,
      asChild,
      children,
      className,
      disabled,
      ...others
    } = defu(props, BUTTON_DEFAULT_PROPS ?? {}) as typeof props;

    return (
      <Primitive
        as={SprocketButton.Root}
        asChild={asChild}
        ref={ref}
        className={cn(
          className,
          buttonVariants({ variant, size, shape, fullWidth, loading, alignment, depth, depthDirection, iconOnly })
        )}
        isDisabled={!asChild ? (disabled || loading || undefined) : undefined}
        {...others}
      >
        {loading ? (
          <Ring
            size="10"
            stroke="1"
            bgOpacity="0"
            speed="2"
            color="black"
          />
        ) : (
          children
        )}
      </Primitive>
    );
  }
);

Button.displayName = BUTTON_DEFAULT_NAME;