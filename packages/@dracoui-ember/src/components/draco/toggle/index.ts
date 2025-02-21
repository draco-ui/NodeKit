import Component from "@glimmer/component";

import type { DracoIconSignature } from "../icon";

export interface DracoToggleSignature {
  Args: {
    disabled?: boolean;
    text?: string | undefined;
    icon?: DracoIconSignature['Args']['name'];
    iconSize?: DracoIconSignature['Args']['size'];
  };
};

export default class DracoToggle extends Component<DracoToggleSignature> {
  get text(): string | undefined {
    return this.args.text ?? undefined;
  }

  get classNames(): string {
    const classes = ['draco-toggle'];

    return classes.join(' ');
  }
}