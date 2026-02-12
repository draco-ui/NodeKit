/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import 'ldrs/react/Ring.css';

import cn from 'clsx';
import { defu } from 'defu';
import { Ring } from 'ldrs/react';
import invariant from 'tiny-invariant';
import { Fragment, forwardRef } from 'react';
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
      label,
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

    invariant(
      !(children && label),
      '[Draco UI] react.Button: Cannot use both "children" and "label" props. Use one or the other.'
    );

    const loader: ReactElement | false | undefined = loading && (
      <Ring
        speed={2}
        stroke={1.5}
        bgOpacity={0}
        color="currentColor"
        size={10 + ['xsmall', 'small', 'medium', 'large'].indexOf(size as string) * 2}
      />
    );

    return (
      <Primitive
        ref={ref}
        asChild={asChild}
        as={SprocketButton.Root}
        className={cn(
          className,
          buttonVariants({ variant, size, shape, fullWidth, loading, alignment, depth, depthDirection, iconOnly })
        )}
        isDisabled={!asChild ? (disabled || loading || undefined) : undefined}
        {...others}
      >
        {asChild ? children : (
          <Fragment>
            {alignment !== 'end' && loader}
            {children || label}
            {alignment === 'end' && loader}
          </Fragment>
        )}
      </Primitive>
    );
  }
);

Button.displayName = BUTTON_DEFAULT_NAME;