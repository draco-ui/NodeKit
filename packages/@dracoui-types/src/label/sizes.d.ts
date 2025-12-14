/**
 * Label size enum values for runtime validation and PropTypes
 */
export enum LabelSizeValues {
  /** Small label size - compact text for tight spaces */
  Small = 'small',
  /** Medium label size - default size for most use cases */
  Medium = 'medium',
  /** Large label size - prominent text for emphasis */
  Large = 'large',
}

/**
 * Label size type - string literal union for TypeScript type checking
 */
export type LabelSizes = `${LabelSizeValues}`;
