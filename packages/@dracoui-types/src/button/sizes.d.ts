export enum ButtonSizeValues {
  XSmall = 'xsmall',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

/**
 * Button size type - string literal union
 */
export type ButtonSizes = `${ButtonSizeValues}`;