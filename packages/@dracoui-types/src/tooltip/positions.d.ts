export enum TooltipPositionValues {
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
 * Tooltip variant type - string literal union
 */
export type TooltipPositions = `${TooltipPositionValues}`;