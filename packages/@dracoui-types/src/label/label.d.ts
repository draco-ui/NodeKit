/**
 * Framework-agnostic Label types for Draco UI
 * Can be used across React, Vue, Ember, and other frameworks
 */

import { LabelSizeValues } from "./sizes.d";
import { LabelWeightValues } from "./weights.d";

import type { LabelSizes } from "./sizes.d";
import type { LabelWeights } from "./weights.d";

/**
 * Base Label properties (framework-agnostic)
 * These are the core props that any framework adapter can extend
 */
interface LabelOptions {
  /**
   * Whether the label is disabled
   * Typically shown with reduced opacity and prevents interaction
   */
  disabled?: boolean;

  /**
   * Whether the field is required
   * Usually displays an asterisk (*) indicator
   */
  required?: boolean;

  /**
   * Visual size of the label text
   */
  size?: LabelSizes;

  /**
   * Font weight of the label text
   */
  weight?: LabelWeights;
}

export { LabelSizeValues, LabelWeightValues };

export type { LabelOptions, LabelSizes, LabelWeights };