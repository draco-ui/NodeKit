import Component from '@glimmer/component';
import { action } from "@ember/object";

export interface DracoInteractiveSignature {
  Args: {
    href?: string;
    isHrefExternal?: boolean;
    isRouteExternal?: boolean;
    route?: string;
    models?: unknown[];
    model?: unknown;
    query?: Record<string, unknown>;
    'current-when'?: string | boolean;
    replace?: boolean;
  };
  Blocks: {
    default: [];
  };
  Element: HTMLAnchorElement | HTMLButtonElement;
}

export default class DracoInteractive extends Component<DracoInteractiveSignature> {
  get isHrefExternal(): boolean {
    return this.args.isHrefExternal ?? true;
  }

  get isRouteExternal(): boolean {
    return this.args.isRouteExternal ?? false;
  }

  @action
  onKeyUp(event: KeyboardEvent): void {
    if (event.key === ' ' || event.key === 'Space') {
      (event.target as HTMLElement).click();
    }
  }
}

