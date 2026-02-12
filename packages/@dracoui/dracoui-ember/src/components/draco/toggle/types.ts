import type { DracoIconSignature } from "../icon/index.ts";

export enum DracoToggleSizeValues {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
};
export type DracoToggleSizes = `${DracoToggleSizeValues}`;

export enum DracoToggleColorValues {
  Primary = 'primary',
  Secondary = 'secondary',
  Tertiary = 'tertiary',
  Amber = 'amber',
  Error = 'error'
};
export type DracoToggleColors = `${DracoToggleColorValues}`;

export enum DracoToggleDirectionValues {
  ToggleFirst = 'toggle-first',
  ToggleLast = 'toggle-last',
  TextFirst = 'text-first',
  TextLast = 'text-last'
};
export type DracoToggleDirections = `${DracoToggleDirectionValues}`;

export type DracoToggleIconConfig =
  | DracoIconSignature['Args']['name']
  | Array<{ checked: DracoIconSignature['Args']['name'], unchecked: DracoIconSignature['Args']['name'] }>;