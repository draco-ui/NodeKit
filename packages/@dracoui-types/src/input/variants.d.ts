export enum InputVariantValues {
  Outline = 'outline',
  Filled = 'filled',
  Underline = 'underline',
}

/**
 * Input variant type - string literal union
 */
export type InputVariants = `${InputVariantValues}`;