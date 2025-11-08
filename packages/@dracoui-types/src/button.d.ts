/**
 * Framework-agnostic Button types for Draco UI
 * Can be used across React, Vue, Ember, and other frameworks
 */

/**
 * Button variant enum values
 */
export enum ButtonVariantValues {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
  Ghost = 'ghost',
  Amber = 'amber',
  Error = 'error'
}

/**
 * Button variant type - string literal union
 */
export type ButtonVariant = `${ButtonVariantValues}`;

/**
 * Button size enum values
 */
export enum ButtonSizeValues {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

/**
 * Button size type - string literal union
 */
export type ButtonSize = `${ButtonSizeValues}`;

/**
 * Button shape enum values
 */
export enum ButtonShapeValues {
  Square = 'square',
  Rounded = 'rounded',
  Pill = 'pill'
}

/**
 * Button shape type - string literal union
 */
export type ButtonShape = `${ButtonShapeValues}`;

/**
 * Base Button properties (framework-agnostic)
 * These are the core props that any framework adapter can extend
 */
export interface BaseButtonProps {
  /**
   * Visual variant of the button
   * @default 'primary'
   */
  variant?: ButtonVariant;

  /**
   * Size of the button
   * @default 'medium'
   */
  size?: ButtonSize;

  /**
   * Shape of the button
   * @default 'rounded'
   */
  shape?: ButtonShape;

  /**
   * Whether the button should have an elevated/shadow effect
   * @default false
   */
  elevated?: boolean;

  /**
   * Whether the button should take full width of its container
   * @default false
   */
  fullWidth?: boolean;

  /**
   * Whether the button is in a loading state
   * @default false
   */
  loading?: boolean;

  /**
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Whether the button should only show an icon (no text)
   * @default false
   */
  iconOnly?: boolean;
}

/**
 * Button event handlers (generic, framework-agnostic)
 */
export interface ButtonEventHandlers {
  /**
   * Called when the button is clicked
   */
  onClick?: () => void;

  /**
   * Called when the button receives focus
   */
  onFocus?: () => void;

  /**
   * Called when the button loses focus
   */
  onBlur?: () => void;
}
