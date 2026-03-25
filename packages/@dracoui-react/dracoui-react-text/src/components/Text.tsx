/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import cn from 'clsx';
import { defu } from 'defu';
import { Primitive, VisuallyHidden } from '@necto-react/components';
import { forwardRef } from 'react';

import { textVariants } from './Text.styles';
import { TEXT_DEFAULT_PROPS, TEXT_DEFAULT_NAME } from '../constants';

import type { TextProps } from './Text.types';
import type { ForwardedRef, ReactElement } from 'react';
import type { VariantProps } from 'class-variance-authority';

export const Text = forwardRef<HTMLElement, TextProps & VariantProps<typeof textVariants>>(
  (
    props: TextProps,
    ref: ForwardedRef<HTMLElement>
  ): ReactElement => {
    const {
      as: Tag,
      variant,
      type,
      size,
      fontWeight,
      alignment,
      textDecorationLine,
      breakWord,
      truncate,
      numeric,
      visuallyHidden,
      children,
      className,
      ...others
    } = defu(props, TEXT_DEFAULT_PROPS ?? {});

    const Component = visuallyHidden ? VisuallyHidden : Primitive;

    return (
      <Component
        ref={ref}
        as={Tag}
        className={cn(
          className,
          textVariants({
            variant,
            type,
            size,
            fontWeight,
            alignment,
            textDecorationLine,
            breakWord,
            truncate,
            numeric,
          })
        )}
        {...others}
      >
        {children}
      </Component>
    );
  }
);

Text.displayName = TEXT_DEFAULT_NAME;
