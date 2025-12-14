/**
 * Copyright (c) Corinvo, LLC. and its partners and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Badge appearance variants
 */
export enum BadgeAppearanceValues {
  Filled = 'filled',
  Ghost = 'ghost',
  Outline = 'outline',
  Tint = 'tint',
}

/**
 * Badge size variants
 */
export enum BadgeSizeValues {
  Tiny = 'tiny',
  ExtraSmall = 'extra-small',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  ExtraLarge = 'extra-large',
}

/**
 * Badge shape variants
 */
export enum BadgeShapeValues {
  Circular = 'circular',
  Rounded = 'rounded',
  Square = 'square',
}

/**
 * Badge color variants
 */
export enum BadgeColorValues {
  Brand = 'brand',
  Danger = 'danger',
  Important = 'important',
  Informative = 'informative',
  Severe = 'severe',
  Subtle = 'subtle',
  Success = 'success',
  Warning = 'warning',
}

/**
 * Base Badge props shared across all frameworks
 */
export interface BaseBadgeProps {
  /**
   * Visual appearance of the badge
   * @default 'filled'
   */
  appearance?: BadgeAppearanceValues | `${BadgeAppearanceValues}`;

  /**
   * Size of the badge
   * @default 'medium'
   */
  size?: BadgeSizeValues | `${BadgeSizeValues}`;

  /**
   * Shape of the badge
   * @default 'circular'
   */
  shape?: BadgeShapeValues | `${BadgeShapeValues}`;

  /**
   * Color variant of the badge
   * @default 'brand'
   */
  color?: BadgeColorValues | `${BadgeColorValues}`;

  /**
   * Additional CSS classes to apply to the badge
   */
  className?: string;
}
