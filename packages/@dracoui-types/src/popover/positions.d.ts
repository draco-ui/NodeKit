export enum PopoverPositionValues {
  Above = 'above',
  AboveStart = 'above-start',
  AboveEnd = 'above-end',
  Below = 'below',
  BelowStart = 'below-start',
  BelowEnd = 'below-end',
  Before = 'before',
  BeforeTop = 'before-top',
  BeforeBottom = 'before-bottom',
  After = 'after',
  AfterTop = 'after-top',
  AfterBottom = 'after-bottom',
}

/**
 * Popover variant type - string literal union
 */
export type PopoverPositions = `${PopoverPositionValues}`;