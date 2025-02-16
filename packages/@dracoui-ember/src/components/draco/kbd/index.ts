import Component from "@glimmer/component";

export interface DracoKbdSignature {
  Args: {
    alt?: boolean;
    meta?: boolean;
    ctrl?: boolean;
    shift?: boolean;
  }
};

export default class DracoKbd extends Component<DracoKbdSignature> {
  get className(): string {
    const classes = ['draco-kbd'];

    return classes.join(' ');
  };
};