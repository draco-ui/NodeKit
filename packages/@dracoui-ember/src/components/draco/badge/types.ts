export enum DracoBadgeSizeValues {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
};
export type DracoBadgeSizes = `${DracoBadgeSizeValues}`;

export enum DracoBadgeIconPositionValues {
  Leading = 'leading',
  Trailing = 'trailing'
};
export type DracoBadgeIconPositions = `${DracoBadgeIconPositionValues}`;

export enum DracoBadgeColorValues {
  Primary = 'primary',

  // Blues
  Blue = 'blue',
  BlueSubtle = 'blue-subtle',

  // Purples
  Purple = 'purple',
  PurpleSubtle = 'purple-subtle',

  // Oranges
  Amber = 'amber',
  AmberSubtle = 'amber-subtle',

  // Reds
  Red = 'red',
  RedSubtle = 'red-subtle',

  // Pinks
  Pink = 'pink',
  PinkSubtle = 'pink-subtle',

  // Greens
  Green = 'green',
  GreenSubtle = 'green-subtle',

  // Teal
  Teal = 'teal',
  TealSubtle = 'teal-subtle',

  // Specials
  Inverted = 'inverted'

};
export type DracoBadgeColors = `${DracoBadgeColorValues}`;

export enum DracoBadgeTypeValues {
  Pill = 'pill',
  Chip = 'chip'
};
export type DracoBadgeTypes = `${DracoBadgeTypeValues}`;