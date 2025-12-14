import type { PopoverOptions } from '@dracoui/types';
import type { MouseEvent, KeyboardEvent, FocusEvent, ComponentPropsWithoutRef, ReactNode } from 'react';

/**
 * Event types that can trigger popover open/close changes.
 */
export type OpenPopoverEvents =
  | MouseEvent<HTMLElement>
  | KeyboardEvent<HTMLElement>
  | FocusEvent<HTMLElement>;

/**
 * Data payload for open state changes.
 */
export interface OnOpenChangeData {
  open: boolean;
}

/**
 * React-specific Popover props
 * - Extends framework-agnostic PopoverOptions (from @dracoui/types)
 * - Extends native div props for convenience (className, style, id, data-*, etc.)
 */
export interface PopoverProps
  extends PopoverOptions,
    ComponentPropsWithoutRef<'div'> {
  /**
   * Popover composition:
   * - Typically includes <PopoverTrigger> and <PopoverSurface> as children,
   *   but can be any ReactNode based on your usage pattern.
   */
  children: ReactNode;

  /**
   * Callback invoked when the popover requests a change to its open state.
   * - Use this for controlled scenarios (synchronize with `open` prop)
   */
  onOpenChange?: (e: OpenPopoverEvents, data: OnOpenChangeData) => void;

  /**
   * Where the overlay (surface) is mounted in the DOM.
   * - HTMLElement: mount directly into this element
   * - { element, className }: mount into element, apply className to the portal root
   * - null/undefined: mount into a default container (e.g., document.body)
   */
  mountNode?: HTMLElement | { element?: HTMLElement | null; className?: string } | null;

  /**
   * Render the popover inline in DOM order instead of portaling to body.
   * @default false
   */
  inline?: boolean;

  /**
   * Close the popover when a scroll event occurs outside the surface.
   * @default false
   */
  closeOnScroll?: boolean;

  /**
   * Close the popover when an iframe outside the PopoverSurface receives focus.
   * @default true
   */
  closeOnIframeFocus?: boolean;

  /**
   * Open the popover as a context menu (contextmenu interaction).
   * Disables other interactions.
   * @default false
   */
  openOnContext?: boolean;
}
