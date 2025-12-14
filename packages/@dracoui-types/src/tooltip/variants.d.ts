export enum TooltipVariantValues {
  Normal = 'normal',
  Inverted = 'inverted'
}

/**
 * Tooltip variant type - string literal union
 */
export type TooltipVariants = `${TooltipVariantValues}`;