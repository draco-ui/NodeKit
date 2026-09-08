/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import cn from 'clsx';
import { defu } from 'defu';
import { forwardRef, useRef, useImperativeHandle } from 'react';
import { useToggleButton } from '@sprocketui/react';

import { toggleButtonVariants } from './ToggleButton.styles';
import { TOGGLE_BUTTON_DEFAULT_PROPS, TOGGLE_BUTTON_DEFAULT_NAME } from '../../constants';

import type { ForwardedRef, ReactElement, RefObject } from 'react';
import type { ToggleButtonProps } from './ToggleButton.types';
import type { VariantProps } from 'class-variance-authority';

export const ToggleButton = forwardRef<HTMLButtonElement, ToggleButtonProps & VariantProps<typeof toggleButtonVariants>>(
  (
    props: ToggleButtonProps,
    ref: ForwardedRef<HTMLButtonElement>
  ): ReactElement => {
    const {
      size,
      shape,
      variant,
      isSelected,
      defaultSelected,
      onChange,
      children,
      className,
      disabled,
      ...others
    } = defu(props, TOGGLE_BUTTON_DEFAULT_PROPS ?? {});

    const internalRef = useRef<HTMLButtonElement>(null);
    useImperativeHandle(ref, () => internalRef.current as HTMLButtonElement);

    const { buttonProps, isSelected: selected } = useToggleButton(
      {
        isSelected,
        defaultSelected,
        onChange,
        isDisabled: disabled,
        ...others,
      },
      internalRef as RefObject<HTMLButtonElement>
    );

    return (
      <button
        ref={internalRef}
        {...buttonProps}
        className={cn(
          className,
          toggleButtonVariants({ variant, size, shape })
        )}
      >
        {children}
      </button>
    );
  }
);

ToggleButton.displayName = TOGGLE_BUTTON_DEFAULT_NAME;
