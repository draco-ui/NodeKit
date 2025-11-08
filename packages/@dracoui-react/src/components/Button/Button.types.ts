import type { ReactNode, ButtonHTMLAttributes } from 'react';
import type { Interpolation, Theme } from '@emotion/react';
import type { BaseButtonProps } from '@dracoui/types';

// Re-export types from @dracoui/types for convenience
export type { ButtonVariant, ButtonSize, ButtonShape } from '@dracoui/types';
export { ButtonVariantValues, ButtonSizeValues, ButtonShapeValues } from '@dracoui/types';

/**
 * React-specific Button props
 * Extends the framework-agnostic BaseButtonProps with React-specific features
 */
export interface ButtonProps extends BaseButtonProps, ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Emotion CSS prop for custom styling
   * Supports both object and template literal syntax
   * @example
   * css={{ marginTop: '20px' }}
   * css={css`margin-top: 20px;`}
   */
  css?: Interpolation<Theme>;

  /**
   * Button content
   */
  children?: ReactNode;
}