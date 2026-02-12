import type { DracoIconSignature } from "../icon";
import type { DracoTabsTabIconPositions } from "./tab/types";

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
  iconPosition?: DracoTabsTabIconPositions;
  icon?: DracoIconSignature['Args']['name'];
  iconSize?: DracoIconSignature['Args']['size'];
};
export type DracoTabsTabProp = DracoTabsTabPropValues[];