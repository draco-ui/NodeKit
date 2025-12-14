import type { ReactNode, HTMLAttributes } from 'react';
import type { Interpolation, Theme } from '@emotion/react';
import type { BaseBadgeProps } from '@dracoui/types';

/**
 * React-specific Badge props
 * Extends the framework-agnostic BaseBadgeProps with React-specific features
 */
export interface BadgeProps extends BaseBadgeProps, Omit<HTMLAttributes<HTMLSpanElement>, 'color'> {
  /**
   * Emotion CSS prop for custom styling
   * Supports both object and template literal syntax
   * @example
   * css={{ marginTop: '20px' }}
   * css={css`margin-top: 20px;`}
   */
  css?: Interpolation<Theme>;

  /**
   * Badge content
   */
  children?: ReactNode;

  /**
   * Changes the component to a Slot, merging its props with the child element.
   * Allows the Badge to render as any element while maintaining Badge styling.
   * @default false
   * @example
   * <Badge asChild>
   *   <a href="/profile">5</a>
   * </Badge>
   */
  asChild?: boolean;
}
