import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils';
import type { Size, Variant } from '@/types';

const badgeVariants = cva('draco-badge', {
  variants: {
    variant: {
      primary: 'draco-badge--primary',
      secondary: 'draco-badge--secondary',
      tertiary: 'draco-badge--tertiary',
      success: 'draco-badge--success',
      warning: 'draco-badge--warning',
      error: 'draco-badge--error',
    },
    size: {
      small: 'draco-badge--small',
      medium: 'draco-badge--medium',
      large: 'draco-badge--large',
    },
    dot: {
      true: 'draco-badge--dot',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

/**
 * Badge component for displaying labels, counts, or status indicators
 *
 * Uses the global @dracoui/styles package for styling
 *
 * @example
 * ```tsx
 * <Badge variant="primary">New</Badge>
 * <Badge variant="success" size="small">Active</Badge>
 * ```
 */
export const Badge: React.FC<BadgeProps> = ({
  variant,
  size,
  dot,
  children,
  className,
  ...props
}) => {
  return (
    <span className={cn(badgeVariants({ variant, size, dot }), className)} {...props}>
      {!dot && children}
    </span>
  );
};

Badge.displayName = 'Badge';
