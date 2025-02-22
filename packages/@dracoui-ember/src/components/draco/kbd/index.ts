import platform from "platform";
import Component from "@glimmer/component";

import type { ModifierKey } from "./types";

export interface DracoKbdSignature {
  Args: {
    alt?: boolean;
    meta?: boolean;
    ctrl?: boolean;
    shift?: boolean;
    single?: boolean;
  },
  Blocks: {
    default: [];
  };
  Element: HTMLElement
};

export default class DracoKbd extends Component<DracoKbdSignature> {
  private isMac =
    platform.os?.family === 'OS X' ||
    platform.os?.family === 'iOS' ||
    platform.os?.family === 'iPadOS';

  private modifierMap: Record<Exclude<keyof DracoKbdSignature['Args'], 'single'>, ModifierKey> = {
    alt: {
      symbol: this.isMac ? '⌥' : 'Alt',
      label: 'Alt'
    },
    meta: {
      symbol: this.isMac ? '⌘' : 'Ctrl',
      label: this.isMac ? 'Cmd' : 'Ctrl'
    },
    ctrl: {
      symbol: '⌃',
      label: 'Ctrl'
    },
    shift: {
      symbol: '&#8679;',
      label: 'Shift'
    }
  };

  get modifiers(): ModifierKey[] {
    return Object.entries(this.args)
      .filter(([key, value]) => value === true)
      .filter(([key]) => key !== 'single')
      .map(([key]) => this.modifierMap[key as Exclude<keyof DracoKbdSignature['Args'], 'single'>]);
  }

  get className(): string {
    const classes = ['draco-kbd'];

    // add single modifier
    if (this.args.single) {
      classes.push('draco-kbd--single');
    }

    return classes.join(' ');
  }
}
