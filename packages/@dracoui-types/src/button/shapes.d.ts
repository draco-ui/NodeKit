export enum ButtonShapeValues {
  Square = 'square',
  Rounded = 'rounded',
  Pill = 'pill',
}

/**
 * Button shape type - string literal union
 */
export type ButtonShapes = `${ButtonShapeValues}`;