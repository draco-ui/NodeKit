import platform from "platform";
import Component from "@glimmer/component";

import type { ModifierKey } from "./types";

export interface DracoKbdSignature {
  Args: {
    alt?: boolean;
    meta?: boolean;
    ctrl?: boolean;
    shift?: boolean;
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

  private modifierMap: Record<keyof DracoKbdSignature['Args'], ModifierKey> = {
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
      .map(([key]) => this.modifierMap[key as keyof DracoKbdSignature['Args']]);
  }

  get className(): string {
    const classes = ['draco-kbd'];

    return classes.join(' ');
  }
}
