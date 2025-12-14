export enum PopoverSizeValues {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

/**
 * Popover variant type - string literal union
 */
export type PopoverSizes = `${PopoverSizeValues}`;