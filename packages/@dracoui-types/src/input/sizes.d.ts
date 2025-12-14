export enum InputSizeValues {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

/**
 * Input size type - string literal union
 */
export type InputSizes = `${InputSizeValues}`;
