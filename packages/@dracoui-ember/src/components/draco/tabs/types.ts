export enum DracoTabsSizeValues {
  Medium = 'medium',
  Large = 'large',
};
export type DracoTabsSizes = `${DracoTabsSizeValues}`;

export interface DracoTabsTabPropValues {
  title: string;
  value?: string;
  disabled?: boolean;
  tooltip?: string;
}
export type DracoTabsTabProp = DracoTabsTabPropValues[];

export type DracoTabsPanelIds = string[];

export type DracoTabsTabIds = string[];