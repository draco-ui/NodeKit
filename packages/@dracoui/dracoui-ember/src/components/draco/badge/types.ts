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

  Secondary = 'secondary',
  SecondarySubtle = 'secondary-subtle',

  Info = 'info',
  InfoSubtle = 'info-subtle',

  Tier = 'tier',
  TierSubtle = 'tier-subtle',

  Amber = 'amber',
  AmberSubtle = 'amber-subtle',

  Danger = 'danger',
  DangerSubtle = 'danger-subtle',

  Sponsor = 'sponsor',
  SponsorSubtle = 'sponsor-subtle',

  Success = 'success',
  SuccessSubtle = 'success-subtle',
};
export type DracoBadgeColors = `${DracoBadgeColorValues}`;

export enum DracoBadgeTypeValues {
  Pill = 'pill',
  Chip = 'chip'
};
export type DracoBadgeTypes = `${DracoBadgeTypeValues}`;