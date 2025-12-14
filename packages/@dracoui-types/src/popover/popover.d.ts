import { PopoverSizeValues} from './sizes.d';
import { PopoverVariantValues } from './variants.d';
import { PopoverPositionValues } from './positions.d';

import type { PopoverSizes } from './sizes.d';
import type { PopoverVariants } from './variants.d';
import type { PopoverPositions } from './positions.d';

interface PopoverOptions {
  /**
   * Visual variant of the popover
   * @default 'normal'
   */
  variant?: PopoverVariants;

  /**
   * Weather the popover is open by default.
   * @default 'false'
   */
  defaultOpen?: boolean;

  /**
   * Render an arrow pointing to the target element.
   * @default 'false'
   */
  withArrow?: boolean;

  /**
   * Controls the opening of the Popover.
   * @default 'false'
   */
  open?: boolean;

  /**
   * Flag to open the Popover by hovering the trigger
   * @default 'false'
   */
  openOnHover?: boolean;

  /**
   * The position of popover relative to the mount element.
   * @default 'bottom'
   */
  position?: PopoverPositions;

  /**
   * Size for the Popover
   * @default 'medium'
   */
  size?: PopoverSizes;

  /**
   * Should trap focus
   * @default 'false'
   */
  trapFocus?: boolean;

  /**
   * The offset (in pixels) between the popover and the trigger element.
   * @default 12
   */
  offset?: number;

  /**
   * Close the popover when clicking outside of it.
   * @default true
   */
  closeOnClickOutside?: boolean;
}

export { PopoverVariantValues, PopoverPositionValues, PopoverSizeValues };

export type { PopoverOptions, PopoverVariants, PopoverPositions, PopoverSizes };
