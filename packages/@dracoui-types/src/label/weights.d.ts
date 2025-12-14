/**
 * Label font weight enum values for runtime validation and PropTypes
 */
export enum LabelWeightValues {
  /** Regular font weight (400) - default weight for standard text */
  Regular = 'regular',
  /** Semibold font weight (600) - emphasizes label text */
  Semibold = 'semibold',
}

/**
 * Label font weight type - string literal union for TypeScript type checking
 */
export type LabelWeights = `${LabelWeightValues}`;
