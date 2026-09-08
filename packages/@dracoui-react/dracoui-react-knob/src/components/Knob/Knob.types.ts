/**
 * Copyright (c) Corinvo, LLC. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

export type KnobSize = 'small' | 'medium' | 'large';

export interface KnobProps {
  /** Current value (controlled). */
  value?: number;

  /** Initial value when uncontrolled. @default 0 */
  defaultValue?: number;

  /** Minimum value. @default 0 */
  min?: number;

  /** Maximum value. @default 100 */
  max?: number;

  /** Step increment for drag / keyboard. @default 1 */
  step?: number;

  /** The size of the knob. @default 'medium' */
  size?: KnobSize;

  /** Called with the new value while the knob is turned. */
  onChange?(value: number): void;

  /** Render the tick ring around the dial. @default true */
  showTicks?: boolean;

  /** Number of ticks in the ring. @default 41 */
  tickCount?: number;

  /** Render numeric labels (0–10 across the range) around the dial. */
  showNumbers?: boolean;

  /** Render the current value in the center of the dial. */
  showValue?: boolean;

  /** Whether the knob is disabled. */
  disabled?: boolean;

  /** Additional CSS class names. */
  className?: string;

  /** Accessible label. */
  'aria-label'?: string;
}
