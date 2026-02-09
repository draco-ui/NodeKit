/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import cn from 'clsx';
import { defu } from 'defu';
import { forwardRef, useState } from 'react';
import { SprocketInput } from '@sprocketui/react';
import { Primitive } from '@necto-react/components';

import { inputVariants } from './Input.styles';
import { INPUT_DEFAULT_PROPS, INPUT_DEFAULT_NAME } from './constants';

import type { InputProps } from './Input.types';
import type { ForwardedRef, ReactElement } from 'react';
import type { VariantProps } from 'class-variance-authority';

type InputComponentProps = InputProps & VariantProps<typeof inputVariants>;

export const Input = forwardRef<HTMLInputElement, InputComponentProps>(
  (
    props: InputComponentProps,
    ref: ForwardedRef<HTMLInputElement>
  ): ReactElement => {
    const {
      size,
      variant,
      fullWidth,
      depth,
      depthDirection,
      className,
      disabled,
      floatingLabel,
      placeholder,
      value,
      defaultValue,
      contentBefore,
      contentAfter,
      onFocus,
      onBlur,
      ...others
    } = defu(props, INPUT_DEFAULT_PROPS);

    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(!!defaultValue || !!value);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setHasValue(!!e.target.value);
      onBlur?.(e);
    };

    return (
      <Primitive.Span
        className={cn(
          inputVariants({ size, variant, fullWidth, depth, depthDirection }),
          floatingLabel && 'draco-input--floating-label',
          className
        )}
      >
        {floatingLabel && placeholder && (
          <span
            className={cn(
              'draco-input__floating-label',
              (isFocused || hasValue) && 'draco-input__floating-label--active'
            )}
          >
            {placeholder}
          </span>
        )}

        {contentBefore && (
          <span className='draco-input__content-before'>
            {contentBefore}
          </span>
        )}

        <SprocketInput.Root
          ref={ref}
          className="draco-input__element"
          disabled={disabled}
          placeholder={floatingLabel ? undefined : placeholder}
          value={value}
          defaultValue={defaultValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...others}
        />

         {contentAfter && (
          <span className='draco-input__content-after'>
            {contentAfter}
          </span>
        )}
      </Primitive.Span>
    );
  }
);

Input.displayName = INPUT_DEFAULT_NAME;
