/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import cn from 'clsx';
import { defu } from 'defu';
import { forwardRef } from 'react';
import { draco } from '@dracoui/primitives/tokens';
import { Box, ShadowBevel } from '@necto-react/components';

import { cardVariants } from './Card.styles';
import { CARD_DEFAULT_PROPS } from '../../constants';

import type { CardProps } from './Card.types';
import type { ForwardedRef, ReactElement } from 'react';
import type { VariantProps } from 'class-variance-authority';

export const Card = forwardRef<HTMLDivElement, CardProps & VariantProps<typeof cardVariants>>(
  (
    props: CardProps,
    ref: ForwardedRef<HTMLDivElement>
  ): ReactElement => {
    const {
      rounded,
      padding,
      variant,
      hoverable,
      depth,
      children,
      className,
      ...others
    } = defu(props, CARD_DEFAULT_PROPS ?? {});

    const hasBevel = !depth && variant !== 'borderless';

    const shadow = depth ? 'none' : {
      default: '0px 1px 0px 0px rgba(26, 26, 26, 0.07), 0px 1px 2px -1px rgba(26, 26, 26, 0.13)',
      borderless: '0px 0px 5px 0px rgba(0, 0, 0, 0.05), 0px 1px 2px 0px rgba(0, 0, 0, 0.07)',
      elevated: '0px 1px 1px 0px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.12)',
    }[variant];

    return (
      <ShadowBevel
        zIndex={32}
        bevel={hasBevel}
        borderRadius={draco.border.radius[rounded]}
        boxShadow={shadow}
        style={{ width: '100%' }}
      >
        <Box
          ref={ref}
          {...others}
          overflowX="clip"
          overflowY="clip"
          minHeight="100%"
          padding={draco.base.space[padding]}
          borderRadius={`${draco.border.radius[rounded]}px`}
          className={cn(className, cardVariants({ variant, depth }), hoverable && 'DracoCard--Hoverable')}
        >
          {children}
        </Box>
      </ShadowBevel>
    );
  }
);
