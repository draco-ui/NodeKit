export enum DracoBadgeSizeValues {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
};
export type DracoBadgeSizes = `${DracoBadgeSizeValues}`;

export enum DracoBadgeColorValues {
  // Grays
  Gray = 'gray',
  GraySubtle = 'gray-subtle',

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

export enum DracoBadgeStyleValues {
  Pill = 'pill',
  Chip = 'chip'
};
export type DracoBadgeStyles = `${DracoBadgeStyleValues}`;