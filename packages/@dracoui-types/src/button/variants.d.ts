export enum ButtonVariantValues {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
  Ghost = 'ghost',
  Amber = 'amber',
  Error = 'error',
}

/**
 * Button variant type - string literal union
 */
export type ButtonVariants = `${ButtonVariantValues}`;