import cn from 'clsx';
import { defu } from 'defu';
import { forwardRef } from 'react';
import { Primitive } from '@necto-react/components';

import { badgeVariants } from './Badge.styles';
import { BADGE_DEFAULT_PROPS, BADGE_DEFAULT_NAME } from './Badge.constants';

import type { BadgeProps } from './Badge.types';
import type { ForwardedRef, ReactElement } from 'react';
import type { VariantProps } from 'class-variance-authority';

export const Badge = forwardRef<HTMLSpanElement, BadgeProps & VariantProps<typeof badgeVariants>>(
  (
    props: BadgeProps,
    ref: ForwardedRef<HTMLSpanElement>
  ): ReactElement => {
    const {
      appearance,
      size,
      shape,
      color,
      asChild,
      children,
      className,
      ...others
    } = defu(props, BADGE_DEFAULT_PROPS);

    const badgeClasses = cn(badgeVariants({ appearance, size, shape, color }), className);

    return (
      <Primitive
        as="span"
        asChild={asChild}
        ref={ref}
        className={badgeClasses}
        {...others}
      >
        {children}
      </Primitive>
    );
  }
);

Badge.displayName = BADGE_DEFAULT_NAME;

export type { BadgeProps };
