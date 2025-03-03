export enum DracoTabsSizeValues {
  Medium = 'medium',
  Large = 'large',
};
export type DracoTabsSizes = `${DracoTabsSizeValues}`;

export enum DracoTabsVariantValues {
  Primary = 'primary',
  Secondary = 'secondary'
};
export type DracoTabsVariants = `${DracoTabsVariantValues}`;

export interface DracoTabsTabPropValues {
  title: string;
  content?: any;
  value?: string;
  tooltip?: string;
  disabled?: boolean;
};
export type DracoTabsTabProp = DracoTabsTabPropValues[];

export type DracoTabsPanelIds = string[];

export type DracoTabsTabIds = string[];